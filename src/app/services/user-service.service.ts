import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

    return this.http.post<UserModel>('',user, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getUserById(userId: number): Observable<UserModel|undefined> {
    return this.http.get<UserModel>(`/${userId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  updateUser(user: UserModel): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.put('', user, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteUser(userId: number): Observable<null> {
    return this.http.delete(`/${userId}`).pipe(
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
