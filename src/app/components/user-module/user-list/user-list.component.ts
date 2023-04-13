import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UserModel } from 'src/app/models/user-model';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

const USERS: UserModel[] = [
  {
    "id": 1,
    "user_code": "ILA29GKY5UA",
    "first_name": "Regina",
    "last_name": "Page",
    "address": "320-7827 Eget Road",
    "service": "A Consulting",
    "phone": "0800 1111"
  },
  {
    "id": 2,
    "user_code": "MYL81POM0QS",
    "first_name": "Wilma",
    "last_name": "Sellers",
    "address": "514-261 Ut Street",
    "service": "Gravida Incorporated",
    "phone": "070 6315 6637"
  },
  {
    "id": 3,
    "user_code": "BUV88TZI8SC",
    "first_name": "Patience",
    "last_name": "Mccoy",
    "address": "P.O. Box 380, 2318 Mauris Street",
    "service": "Nec Diam Associates",
    "phone": "0845 46 41"
  },
  {
    "id": 4,
    "user_code": "IUT87FBB2II",
    "first_name": "Chadwick",
    "last_name": "Dorsey",
    "address": "130-5730 Eleifend, St.",
    "service": "Tempor Arcu Vestibulum Corp.",
    "phone": "056 2267 0541"
  },
  {
    "id": 5,
    "user_code": "QUU22LFN4SM",
    "first_name": "Paul",
    "last_name": "Whitaker",
    "address": "P.O. Box 494, 5173 A, Rd.",
    "service": "Nisl Associates",
    "phone": "(026) 6456 2380"
  },
  {
    "id": 6,
    "user_code": "ONM36OWS2BO",
    "first_name": "Miriam",
    "last_name": "Gray",
    "address": "455-5389 Integer St.",
    "service": "Lectus Limited",
    "phone": "(0191) 104 2446"
  },
  {
    "id": 7,
    "user_code": "ZRK33EHF7HB",
    "first_name": "Devin",
    "last_name": "Baker",
    "address": "P.O. Box 665, 4273 Vehicula Rd.",
    "service": "Laoreet Institute",
    "phone": "0800 736115"
  },
  {
    "id": 8,
    "user_code": "PVL61GTF6ET",
    "first_name": "Evelyn",
    "last_name": "Morgan",
    "address": "Ap #713-8215 Eu Road",
    "service": "Curae Corp.",
    "phone": "0845 46 45"
  },
  {
    "id": 9,
    "user_code": "VRV26NLO8BQ",
    "first_name": "Madaline",
    "last_name": "White",
    "address": "Ap #350-6630 Curabitur St.",
    "service": "Scelerisque Company",
    "phone": "0800 1111"
  },
  {
    "id": 10,
    "user_code": "YSV24QWB1AG",
    "first_name": "Gemma",
    "last_name": "Petty",
    "address": "612-538 Urna St.",
    "service": "Sit Corp.",
    "phone": "(029) 1716 9796"
  },
  {
    "id": 11,
    "user_code": "HBY77JNP6VD",
    "first_name": "Nissim",
    "last_name": "Morrow",
    "address": "1979 Id St.",
    "service": "Nisl Corporation",
    "phone": "056 5432 1153"
  },
  {
    "id": 12,
    "user_code": "TXC35NAT6DA",
    "first_name": "Craig",
    "last_name": "Roberts",
    "address": "Ap #265-816 Ligula. Street",
    "service": "Fermentum Vel Institute",
    "phone": "(016977) 5088"
  },
  {
    "id": 13,
    "user_code": "QTM64AKK8GF",
    "first_name": "Charity",
    "last_name": "Horne",
    "address": "P.O. Box 919, 8879 Consectetuer, Avenue",
    "service": "Leo Vivamus Incorporated",
    "phone": "(0115) 068 5677"
  },
  {
    "id": 14,
    "user_code": "FAS44RNY8TY",
    "first_name": "Lisandra",
    "last_name": "Lynn",
    "address": "7410 Duis St.",
    "service": "Maecenas Malesuada Limited",
    "phone": "(0117) 061 7653"
  },
  {
    "id": 15,
    "user_code": "JNN54UVK3XJ",
    "first_name": "Jocelyn",
    "last_name": "Ford",
    "address": "Ap #186-9448 In Avenue",
    "service": "Lorem Vitae Incorporated",
    "phone": "0500 681163"
  },
  {
    "id": 16,
    "user_code": "UJO18PZE5PB",
    "first_name": "Simon",
    "last_name": "Manning",
    "address": "Ap #576-4473 Sagittis Avenue",
    "service": "Vitae Diam Foundation",
    "phone": "0800 659 3956"
  },
  {
    "id": 17,
    "user_code": "DER24VZF4SV",
    "first_name": "Joseph",
    "last_name": "Sweeney",
    "address": "Ap #855-2657 Eget St.",
    "service": "Dolor Dolor LLC",
    "phone": "(026) 2845 1156"
  },
  {
    "id": 18,
    "user_code": "CTB97NQM3EI",
    "first_name": "Iliana",
    "last_name": "Mcknight",
    "address": "3264 Ut Avenue",
    "service": "Odio Tristique Pharetra Company",
    "phone": "076 0376 3618"
  },
  {
    "id": 19,
    "user_code": "RIP40FQW4WA",
    "first_name": "Aspen",
    "last_name": "Arnold",
    "address": "Ap #957-5580 Magna. St.",
    "service": "Dis Parturient Ltd",
    "phone": "0800 1111"
  },
  {
    "id": 20,
    "user_code": "HPT41JKD1HI",
    "first_name": "Tobias",
    "last_name": "Copeland",
    "address": "P.O. Box 964, 2839 Vestibulum, Street",
    "service": "Dui Fusce Institute",
    "phone": "0872 022 7443"
  }
]

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
export class UserListComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  users: MatTableDataSource<UserModel>;
  nbr_users: Number = 0;

  constructor(private router: Router) {
    this.users = new MatTableDataSource(USERS);
  }

  ngAfterViewInit() {
    this.users.paginator = this.paginator;
    this.users.sort = this.sort;
    this.nbr_users = this.users.data.length;
  }

  //displayedColumns: string[] = ['Code', 'First Name', 'Last Name', 'Service'];
  displayedColumnsUsers: string[] = ['user_code', 'first_name', 'last_name', 'address', 'service'];
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
