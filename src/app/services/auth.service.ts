import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of, delay, tap, catchError, BehaviorSubject } from 'rxjs';
import { LoginModel } from '../models/login-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL_LOGIN: string = "http://localhost:9000/api";
  private readonly TOKEN_NAME = 'take_care_auth';

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  user: UserModel;

  get token() {
    return localStorage.getItem(this.TOKEN_NAME)
  }

  constructor(private http: HttpClient) {
    this._isLoggedIn$.next(!!this.token);
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
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, res.token);
        this.getUser(res.token).subscribe();
      }
      ),
      catchError((error) => this.handleError(error, null))
    );
  }

  getUser(token: string): Observable<UserModel> {
    const headers = {
      headers: new HttpHeaders(token)
    };

    return this.http.get<UserModel>(this.API_URL_LOGIN + "/user", headers).pipe(
      tap((user) => {
        this.log("+++++++++++++++++++++++++++++++++=");
        //this.log(user);
        this.user = user;
        this.log(this.user);
      }),
      catchError((error) => this.handleError(error, null))
    )
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
        this._isLoggedIn$.next(false);
        localStorage.removeItem(this.TOKEN_NAME);
      }),
      catchError((error) => this.handleError(error, null))
    );
  }
}
