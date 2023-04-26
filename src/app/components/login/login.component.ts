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

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.auth = this.authService;
    if (this.auth.isLoggedIn) {
      this.messsage = "Login succes!"
    }

    this.form = this.formBuilder.group({
      user_code:'',
      password:''
    });
  }

  setMessage() {
    if(this.auth.isLoggedIn) {
      this.messsage = "Login succes!";
    } else {
      this.messsage = "Login faild!";
    }
  }

  login() {
    this.messsage = "Connection...";
    this.auth.authentication(this.loginModel).subscribe(() => this.router.navigate(['/home']));
  }

  submit() {
    this.http.post('http://127.0.0.1:9000/api/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(() => this.router.navigate(['/home']));
  }

  logout() {
    this.auth.logout();
    this.messsage = "Desconnected!"
  }

}
