import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  @Input() user: UserModel;
  services: string[];
  isAddForm: boolean;
  hide: boolean = true;
  title: string = '';

  constructor(private router: Router, private userSerice: UserService) { }

  ngOnInit(): void {
    this.services = this.userSerice.getUserServices();
    this.isAddForm = this.router.url.includes('add');

    if(this.isAddForm) {
      this.title = 'Add User'
    } else {
      this.title = 'Edit User: '+ this.user.first_name;
    }
  }

  hasService(service: string): boolean {
    return this.user.service.includes(service);
  }

  selectService($event: Event, service: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.user.service.replace(this.user.service, service);
    }else{
      const index = this.user.service.indexOf(service);
      this.user.service.replace(this.user.service, service)
    }
  }

  isServiceValid(service: string): boolean {
    if(this.user.service && this.hasService(service)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    if(this.isAddForm) {
      this.userSerice.addUser(this.user)
      .subscribe((user: UserModel) => this.router.navigate(['/user', user._id]));
    } else {
      this.userSerice.updateUser(this.user)
      .subscribe(() => this.router.navigate(['/user', this.user._id]));
    }
  }

}
