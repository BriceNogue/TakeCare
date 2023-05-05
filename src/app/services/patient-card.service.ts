import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { PatientCardModel } from '../models/pateint_card_model';

@Injectable({
  providedIn: 'root'
})
export class PatientCardService {

  API_URL_PATIENT_CARD: string = "http://127.0.0.1:9000/api";

  constructor(private http: HttpClient) { }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  addPatientCard(patientCard: PatientCardModel): Observable<PatientCardModel> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };

    return this.http.post<PatientCardModel>(this.API_URL_PATIENT_CARD + "/patient_card", patientCard, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  getPatientCards(): Observable<PatientCardModel[]> {
    return this.http.get<PatientCardModel[]>(this.API_URL_PATIENT_CARD + "/patient_cards").pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPatientCardById(patientCardId: string): Observable<PatientCardModel | any> {
    return this.http.get<PatientCardModel>(this.API_URL_PATIENT_CARD + "/patient_cards/" + patientCardId).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updateUser(patientCard: PatientCardModel): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    console.log(patientCard);

    return this.http.put(this.API_URL_PATIENT_CARD + "user/" + patientCard._id, patientCard, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteUser(patientCard: PatientCardModel): Observable<null> {
    return this.http.delete(this.API_URL_PATIENT_CARD + "user/" + patientCard._id).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

}
