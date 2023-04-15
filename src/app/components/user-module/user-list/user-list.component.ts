import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UserModel } from 'src/app/models/user-model';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserListComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  USERS: UserModel[] = [];
  users: MatTableDataSource<UserModel>;
  nbr_users: Number = 0;

  constructor(private router: Router, private userService: UserService) {
    this.users = new MatTableDataSource(this.USERS);
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = new MatTableDataSource(users),
      this.users.paginator = this.paginator;
      this.nbr_users = this.users.data.length;
    });
  }

  ngAfterViewInit() {
    //this.users.paginator = this.paginator;
    this.users.sort = this.sort;
    //this.nbr_users = this.users.data.length;
  }

  //displayedColumns: string[] = ['Code', 'First Name', 'Last Name', 'Service'];
  displayedColumnsUsers: string[] = ['user_code', 'first_name', 'last_name', 'address', 'service', 'action'];
  columnsToDisplayWithExpand = [...this.displayedColumnsUsers, 'expand'];
  expandedElement: UserModel | null;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();

    if (this.users.paginator) {
      this.users.paginator.firstPage();
    }
  }

  goToAddUser() {
    this.router.navigate(['/add_user']);
  }

}
