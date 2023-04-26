import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, delay, tap, catchError } from 'rxjs';
import { LoginModel } from '../models/login-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL_LOGIN: string = "http://127.0.0.1:9000/api";

  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(private http: HttpClient) { }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  authentication(loginModel: LoginModel): Observable<LoginModel> {
    return this.http.post<LoginModel>(this.API_URL_LOGIN + "/login", loginModel, { withCredentials: true }).pipe(
      tap((res) =>
        this.log(res)
      ),
      catchError((error) => this.handleError(error, null))
    );
  }

  login(): Observable<UserModel> {
    return this.http.get<UserModel>(this.API_URL_LOGIN + "/user", { withCredentials: true }).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, null))
    )
  }

  logout(): any {
    return this.http.post(this.API_URL_LOGIN+"/logout", {}, {withCredentials: true}).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, null))
    );
    this.isLoggedIn = false;
  }
}
