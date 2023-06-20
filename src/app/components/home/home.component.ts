import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user_name: string;
  auth: AuthService;
  isLoggedIn: boolean;

  constructor(
    public authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(res => {
      if(res) {
        this.isLoggedIn = res;
      }else {
        this.isLoggedIn = false;
      }
    })
  }

  goToLogin() {
    this.router.navigate(['login'])
  }

}

