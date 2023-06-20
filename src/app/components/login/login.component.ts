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
    this.authService.isLoggedIn$.subscribe(res => {
      if (res) {
        this.router.navigate(['/home'])
      }
    })
  }

  login() {
    this.messsage = "Connection...";
    this.auth.login(this.loginModel)
      .subscribe((res) => {
        console.log(res);
        this.authService.isLoggedIn$.subscribe(res => {
          if (res) {
            this.router.navigate(['/home'])
          }
        })
      });
  }

  logout() {
    this.auth.logout();
    this.messsage = "Desconnected!"
  }

}
