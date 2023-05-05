import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of, delay, tap, catchError, BehaviorSubject } from 'rxjs';
import { LoginModel } from '../models/login-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL_LOGIN: string = "http://127.0.0.1:9000/api";

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('take_care_auth');
    this._isLoggedIn$.next(!!token);
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  login(loginModel: LoginModel): Observable<any> {
    return this.http.post<LoginModel>(this.API_URL_LOGIN + "/login", loginModel, { withCredentials: true }).pipe(
      tap((res: any) => {
        this.log(res);
        localStorage.setItem('take_care_auth', res.token);
        this._isLoggedIn$.next(true);
      }
      ),
      catchError((error) => this.handleError(error, null))
    );
  }

  /*login(): Observable<UserModel> {
    return this.http.get<UserModel>(this.API_URL_LOGIN + "/user", { withCredentials: true }).pipe(
      tap((res) => {
        this.log(res);
        //this.isLoggedIn = true;
      }),
      catchError((error) => this.handleError(error, null))
    )
  }*/

  logout(): any {
    return this.http.post(this.API_URL_LOGIN + "/logout", {}, { withCredentials: true }).pipe(
      tap((res) => {
        this.log(res);
        //this.isLoggedIn = false;
      }),
      catchError((error) => this.handleError(error, null))
    );
  }
}
