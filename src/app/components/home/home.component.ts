import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user_name: string;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.authService.login().subscribe((user) =>
      {
        this.user_name = user.first_name + " " + user.last_name;
      }
    );

    console.log(this.authService.isLoggedIn);

  }

}

