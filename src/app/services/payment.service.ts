import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, tap, catchError } from 'rxjs';
import { PaymentModel } from '../models/payment-model';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  API_URL_PAYMENT: string = "http://127.0.0.1:9000/api"

  constructor(private http: HttpClient) { }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  addPayment(payment: PaymentModel): Observable<PaymentModel> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };

    return this.http.post<PaymentModel>(this.API_URL_PAYMENT + "/payment", payment, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  getPayments(): Observable<PaymentModel[]> {
    return this.http.get<PaymentModel[]>(this.API_URL_PAYMENT + "/payments").pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getUserById(paymentId: string): Observable<PaymentModel | undefined> {
    return this.http.get<PaymentModel>(this.API_URL_PAYMENT + "/payments/" + paymentId).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updatePayment(payment: PaymentModel): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    console.log(payment);

    return this.http.put(this.API_URL_PAYMENT + "/payment/" + payment._id, payment, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePayment(payment: PaymentModel): Observable<null> {
    return this.http.delete(this.API_URL_PAYMENT + "/payment/" + payment._id).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }
}
