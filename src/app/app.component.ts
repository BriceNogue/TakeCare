import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { async } from 'rxjs';
import { UserModel } from './models/user-model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'TakeCare';
  opened = true;
  isLoggedIn: boolean;
  auth: AuthService;
  connectedUser: UserModel;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.auth = this.authService;
  }

  ngAfterViewInit(): void {
    
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout().subscribe(() =>
      this.isLoggedIn = true,
      this.router.navigate(['/login'])
    );
  }
}