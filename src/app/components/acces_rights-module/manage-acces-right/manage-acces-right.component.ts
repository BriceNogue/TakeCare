import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/service-model';
import { UserModel } from 'src/app/models/user-model';
import { HServiceService } from 'src/app/services/h-service.service';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-manage-acces-right',
  templateUrl: './manage-acces-right.component.html',
  styleUrls: ['./manage-acces-right.component.scss']
})
export class ManageAccesRightComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  USERS: UserModel[] = [];
  users: MatTableDataSource<UserModel>;
  services: ServiceModel[] = [];
  nbr_users: Number = 0;

  displayedColumns: string[] = ['user_code', 'first_name', 'last_name', 'service', 'role', 'actions'];

  constructor(
    private router: Router, 
    private userService: UserService,
    private roleService: RoleService,
    private hService: HServiceService
    ) {
    this.users = new MatTableDataSource(this.USERS);
  }

  ngOnInit() {

    this.hService.getServices().subscribe(services => {
      this.services = services
    })

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

  goToAddRole(userId: string) {
    this.router.navigate(['/add/acces_right/'+userId])
  }

}
