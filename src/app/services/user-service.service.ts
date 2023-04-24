import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL_USER: string = "http://127.0.0.1:9000/api/"

  constructor(private http: HttpClient) { }

  private log (response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  addUser(user: UserModel): Observable<UserModel> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.post<UserModel>(this.API_URL_USER+"user",user, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.API_URL_USER+"users").pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getUserById(userId: string): Observable<UserModel|undefined> {
    return this.http.get<UserModel>(this.API_URL_USER+"users/"+userId).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updateUser(user: UserModel): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    console.log(user);

    return this.http.put(this.API_URL_USER+"user/"+user._id, user, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteUser(user: UserModel): Observable<null> {
    return this.http.delete(this.API_URL_USER+"user/"+user._id).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,null))
    );
  }

  getUserServices(): string[] {
    return [
      'Admin',
      'General',
      'Infirm'
    ];
  }
}
