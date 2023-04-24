import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { PatientModel } from '../models/patient-model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  API_URL_PATIENT: string = ""

  constructor(private http: HttpClient) { }

  private log (response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  addPatient(patient: PatientModel): Observable<PatientModel> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.post<PatientModel>('API_URL_PATIENT',patient, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  getPatients(): Observable<PatientModel[]> {
    return this.http.get<PatientModel[]>('API_URL_PATIENT').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPatientById(patientId: number): Observable<PatientModel|undefined> {
    return this.http.get<PatientModel>(`API_URL_PATIENT/${patientId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  updatePatient(patient: PatientModel): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.put('API_URL_PATIENT', patient, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePatient(patientId: number): Observable<null> {
    return this.http.delete(`API_URL_PATIENT/${patientId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }
}

