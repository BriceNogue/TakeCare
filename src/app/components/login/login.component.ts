import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login-model';
import { UserModel } from 'src/app/models/user-model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messsage: string = "Login fail!"
  //user : UserModel = new UserModel;
  loginModel: LoginModel = new LoginModel;
  hide: boolean = true;
  auth: AuthService;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.auth = this.authService;
  }

  login() {
    this.messsage = "Connection...";
    this.auth.authentication(this.loginModel)
      .subscribe((isLoggedIn: boolean) => {
        if(isLoggedIn){
          this.router.navigate(['/home'])
        } else {
          this.router.navigate(['/login']);
        }
      });
  }

  logout() {
    this.auth.logout();
    this.messsage = "Desconnected!"
  }

}
