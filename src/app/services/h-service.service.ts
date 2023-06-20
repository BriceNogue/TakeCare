import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { ServiceModel } from '../models/service-model';

@Injectable({
  providedIn: 'root'
})
export class HServiceService {

  API_URL_SERVICE: string = "http://localhost:9000/api";

  constructor(private http: HttpClient) { }

  private log(response: any) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  addService(service: ServiceModel): Observable<ServiceModel> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };

    return this.http.post<ServiceModel>(this.API_URL_SERVICE + "/service", service, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  getServices(): Observable<ServiceModel[]> {
    return this.http.get<ServiceModel[]>(this.API_URL_SERVICE + "/services").pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getServiceById(serviceId: string): Observable<ServiceModel | undefined> {
    return this.http.get<ServiceModel>(this.API_URL_SERVICE + "/services/" + serviceId).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updateServive(service: ServiceModel): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };

    return this.http.put(this.API_URL_SERVICE + "/service/" + service._id, service, httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteService(service: ServiceModel): Observable<null> {
    return this.http.delete(this.API_URL_SERVICE + "/service/" + service._id).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, null))
    );
  }
}
