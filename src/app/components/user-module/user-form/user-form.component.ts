import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/service-model';
import { UserModel } from 'src/app/models/user-model';
import { HServiceService } from 'src/app/services/h-service.service';
import { UserService } from 'src/app/services/user-service.service';
//import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  @Input() user: UserModel;
  services: ServiceModel[];
  isAddForm: boolean;
  hide: boolean = true;
  title: string = '';

  constructor(
    private router: Router, 
    private userService: UserService,
    private h_service: HServiceService
    ) { }

  ngOnInit(): void {
    this.h_service.getServices().subscribe(services => this.services = services);
    this.isAddForm = this.router.url.includes('add');

    if(this.isAddForm) {
      this.title = 'Add User'
    } else {
      this.title = 'Edit User: '+ this.user.first_name;
    }
  }

  onSubmit() {
    if(this.isAddForm) {
      this.userService.addUser(this.user)
      .subscribe((user: UserModel) => this.router.navigate(['/users', user._id]));
    } else {
      this.userService.updateUser(this.user)
      .subscribe(() => this.router.navigate(['/users', this.user._id]));
    }
  }

}
