import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HoursModel } from '../models/hours-model';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  API_HOURS_ULR: string = "http://127.0.0.1:9000/api";

  constructor(private http: HttpClient) { }

  private log (response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  addHours(hours: HoursModel): Observable<HoursModel> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
    };

    return this.http.post<HoursModel>(this.API_HOURS_ULR+"/hour", hours, httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, null))
    )
  }

  getHours(): Observable<HoursModel[]> {
    return this.http.get<HoursModel[]>(this.API_HOURS_ULR+"/hours").pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getHoursById(hoursId: string): Observable<HoursModel | undefined> {
    return this.http.get<HoursModel>("/"+hoursId).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, undefined))
    );
  }
}
