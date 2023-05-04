import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, tap, catchError } from 'rxjs';
import { ConsultationModel } from '../models/consultation-model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  API_URL_CONSULTATION: string = "http://127.0.0.1:9000/api";

  constructor(private http: HttpClient) { }

  private log (response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  addConsultation(consultation: ConsultationModel): Observable<ConsultationModel> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.post<ConsultationModel>(this.API_URL_CONSULTATION+"/consultation",consultation, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  getConsultations(): Observable<ConsultationModel[]> {
    return this.http.get<ConsultationModel[]>(this.API_URL_CONSULTATION+"/consultations").pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getConsultationById(consultationId: string): Observable<ConsultationModel|undefined> {
    return this.http.get<ConsultationModel>(this.API_URL_CONSULTATION+"users/"+consultationId).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updateConsultation(consultation: ConsultationModel): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    console.log(consultation);

    return this.http.put(this.API_URL_CONSULTATION+"/consultation/"+consultation._id, consultation, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteConsultation(consultation: ConsultationModel): Observable<null> {
    return this.http.delete(this.API_URL_CONSULTATION+"/consultation/"+consultation._id).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,null))
    );
  }

}
