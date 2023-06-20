import { Injectable } from '@angular/core';
import { RoleModel } from '../models/role';
import { HttpClient } from '@angular/common/http';
import { of, Observable, tap, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private readonly API_URL_ROLES: string = "http://127.0.0.1:9000/api";

  constructor(private http: HttpClient) { }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getRoles(): Observable<RoleModel> {
    return this.http.get<RoleModel[]>(this.API_URL_ROLES + "/roles").pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getRoleById(roleId: string): Observable<RoleModel | any> {
    return this.http.get<RoleModel>(this.API_URL_ROLES + "/roles/" + roleId).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }
}
