import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { AppointmentModel } from '../models/appointment-model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  API_URL_APPOINTMENT: string = "http://127.0.0.1:9000/api";

  constructor(private http: HttpClient) { }

  private log (response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  addAppointment(appointment: AppointmentModel): Observable<AppointmentModel> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.post<AppointmentModel>(this.API_URL_APPOINTMENT+"/appointment",appointment, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  getAppointments(): Observable<AppointmentModel[]> {
    return this.http.get<AppointmentModel[]>(this.API_URL_APPOINTMENT+"/appointments").pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getAppointmentById(appointmentId: string): Observable<AppointmentModel|undefined> {
    return this.http.get<AppointmentModel>(this.API_URL_APPOINTMENT+"/appointments/"+appointmentId).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updateAppointment(appointment: AppointmentModel): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    console.log(appointment);

    return this.http.put(this.API_URL_APPOINTMENT+"/appointment/"+appointment._id, appointment, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteAppointment(appointment: AppointmentModel): Observable<null> {
    return this.http.delete(this.API_URL_APPOINTMENT+"/appointment/"+appointment._id).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,null))
    );
  }
}
