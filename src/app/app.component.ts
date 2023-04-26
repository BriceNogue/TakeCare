import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TakeCare';
  opened = false;
  isLoggedIn: boolean;
  auth: AuthService;

  constructor (
    private router: Router,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.auth = this.authService;
    this.isLoggedIn = this.auth.isLoggedIn;
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout().subscribe(() => 
      this.router.navigate(['/login'])
    );
  }
}