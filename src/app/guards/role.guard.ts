import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ru } from 'date-fns/locale';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree | any {
    //const isAuthorized = this.authService.user.role.includes(route.data['role']);
    const isAuthorized = this.authService.token?.includes(route.data['role']);

    if(!isAuthorized) {

      this.authService.getUser(this.authService.token!).subscribe((res ) => {
        if(res.role.includes(route.data['role'])) {
          return true;
        } else {
          window.alert('You are not authorized!');
          console.log(this.authService.token);
          //this.authService.getUser()
          return false
        }
      })

    }
  }
  
}
