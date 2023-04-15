import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: UserModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = new UserModel();
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }

}
