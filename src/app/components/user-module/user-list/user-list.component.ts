import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UserModel } from 'src/app/models/user-model';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { ServiceModel } from 'src/app/models/service-model';
import { HServiceService } from 'src/app/services/h-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  USERS: UserModel[] = [];
  services: ServiceModel[] = [];
  users: MatTableDataSource<UserModel>;
  nbr_users: Number = 0;

  displayedColumns: string[] = ['user_code', 'first_name', 'last_name', 'address', 'service', 'actions'];

  constructor(
    private router: Router, 
    private userService: UserService,
    private hService: HServiceService
    ) {
    this.users = new MatTableDataSource(this.USERS);
  }

  ngOnInit() {
    this,this.hService.getServices().subscribe(services => {
      this.services = services;
    });

    this.userService.getUsers().subscribe(users => {
      this.users = new MatTableDataSource(users),
      this.users.paginator = this.paginator;
      this.nbr_users = this.users.data.length;
    });
  }

  ngAfterViewInit() {
    this.users.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();

    if (this.users.paginator) {
      this.users.paginator.firstPage();
    }
  }

  getUserService(user: UserModel): string {
    let userService: string = "..";
    this.services.forEach(service => {
      if(user.service_id == service._id) {
        userService = service.libelle;
      }
      //return userService;
    })

    return userService;
  }

  goToUserDetail(userId: string) {
    this.router.navigate(['/users/'+userId])
  }

  goToAddUser() {
    this.router.navigate(['/add_user']);
  }

}
