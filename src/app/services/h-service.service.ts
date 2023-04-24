import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { ServiceModel } from '../models/service-model';

@Injectable({
  providedIn: 'root'
})
export class HServiceService {

  API_URL_SERVICE: String = "";

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

    return this.http.post<ServiceModel>(this.API_URL_SERVICE+"", service, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }
}
