import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator'
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PatientModel } from 'src/app/models/patient-model';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

const PATIENTS: PatientModel[] = [
	{
		"id": 1,
		"patient_code": "LZI06RTS6KB",
		"first_name": "Dominique",
		"last_name": "Kent",
		"address": "Ap #522-4286 Dis Road",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 41,
		"assurance": "True",
		"phone": "1-885-538-2625",
	},
	{
		"id": 2,
		"patient_code": "LGW40BME4MF",
		"first_name": "Caryn",
		"last_name": "Anthony",
		"address": "Ap #295-138 Cursus Ave",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 57,
		"assurance": "False",
		"phone": "(648) 681-4308"
	},
	{
		"id": 3,
		"patient_code": "TNL52KSI8RT",
		"first_name": "Daryl",
		"last_name": "Dickson",
		"address": "Ap #586-9281 Neque. Rd.",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 25,
		"assurance": "True",
		"phone": "1-542-245-1866"
	},
	{
		"id": 4,
		"patient_code": "IYJ88NSX9YX",
		"first_name": "Josephine",
		"last_name": "O'Neill",
		"address": "4560 Aliquam Rd.",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 37,
		"assurance": "False",
		"phone": "1-754-247-9482"
	},
	{
		"id": 5,
		"patient_code": "YMG34BND6JA",
		"first_name": "John",
		"last_name": "Mcpherson",
		"address": "1290 Aenean Road",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 17,
		"assurance": "False",
		"phone": "1-883-457-3051"
	},
	{
		"id": 6,
		"patient_code": "QDQ04EOI6BM",
		"first_name": "Emily",
		"last_name": "Irwin",
		"address": "154-1094 Blandit St.",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 37,
		"assurance": "True",
		"phone": "1-803-643-7844"
	},
	{
		"id": 7,
		"patient_code": "LFD26CAW6IO",
		"first_name": "Yasir",
		"last_name": "Greene",
		"address": "546-9738 Placerat Ave",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 52,
		"assurance": "False",
		"phone": "(202) 755-3227"
	},
	{
		"id": 8,
		"patient_code": "KTG81DPA3QY",
		"first_name": "Piper",
		"last_name": "Luna",
		"address": "4645 A, Road",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 15,
		"assurance": "True",
		"phone": "(723) 954-7232"
	},
	{
		"id": 9,
		"patient_code": "NLF61JXR8PQ",
		"first_name": "TaShya",
		"last_name": "Brown",
		"address": "Ap #899-5361 Massa. Avenue",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 12,
		"assurance": "True",
		"phone": "(934) 337-3880"
	},
	{
		"id": 10,
		"patient_code": "FMG67LQJ4CH",
		"first_name": "William",
		"last_name": "Compton",
		"address": "Ap #633-8920 Ac St.",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 26,
		"assurance": "True",
		"phone": "1-818-915-5557"
	},
	{
		"id": 11,
		"patient_code": "KOQ20KYX5CI",
		"first_name": "Kaitlin",
		"last_name": "Wade",
		"address": "Ap #353-6148 Tincidunt Av.",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 36,
		"assurance": "True",
		"phone": "1-786-608-1868"
	},
	{
		"id": 12,
		"patient_code": "FVL34PTP9PY",
		"first_name": "Brenna",
		"last_name": "Price",
		"address": "504-9139 Nibh. Av.",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 13,
		"assurance": "True",
		"phone": "1-682-266-7325"
	},
	{
		"id": 13,
		"patient_code": "QBT91PIM0XG",
		"first_name": "Tyrone",
		"last_name": "Atkinson",
		"address": "Ap #447-9301 Mauris Avenue",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 14,
		"assurance": "True",
		"phone": "(259) 313-6618"
	},
	{
		"id": 14,
		"patient_code": "BYT43KYB2CH",
		"first_name": "Odessa",
		"last_name": "Ortiz",
		"address": "577-6324 Id St.",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 64,
		"assurance": "True",
		"phone": "1-777-427-1419"
	},
	{
		"id": 15,
		"patient_code": "MIW50MRN2WC",
		"first_name": "Jessamine",
		"last_name": "Kinney",
		"address": "P.O. Box 686, 1800 Neque Av.",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 45,
		"assurance": "True",
		"phone": "1-461-322-9583"
	},
	{
		"id": 16,
		"patient_code": "TYU50BNM7HQ",
		"first_name": "Erasmus",
		"last_name": "Mcguire",
		"address": "914-8292 Lectus Road",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 60,
		"assurance": "False",
		"phone": "(926) 760-5317"
	},
	{
		"id": 17,
		"patient_code": "EGW58RPS6SW",
		"first_name": "Jin",
		"last_name": "Love",
		"address": "414-9886 Imperdiet Ave",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 50,
		"assurance": "True",
		"phone": "(326) 359-3237"
	},
	{
		"id": 18,
		"patient_code": "FPD23SIA5VK",
		"first_name": "Lars",
		"last_name": "Woods",
		"address": "P.O. Box 136, 7261 Fringilla Street",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 43,
		"assurance": "False",
		"phone": "(681) 395-5055"
	},
	{
		"id": 19,
		"patient_code": "CWU63SFU7SG",
		"first_name": "Tatyana",
		"last_name": "Mendez",
		"address": "794-465 Eu St.",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 79,
		"assurance": "False",
		"phone": "(774) 260-5087"
	},
	{
		"id": 20,
		"patient_code": "KIT55PBX0WC",
		"first_name": "Rajah",
		"last_name": "Mueller",
		"address": "Ap #490-2027 Pede Road",
		"inscription_date": new Date("Nov 19, 2022"),
		"birthday": new Date("08/01/1999"),
		"gender": "M",
		"age": 74,
		"assurance": "True",
		"phone": "(173) 333-8541"
	}
]

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PatientsListComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  patients: MatTableDataSource<PatientModel>;
  nbr_patiens: Number = 0;

  constructor(private router: Router) { 
    this.patients = new MatTableDataSource(PATIENTS);
  }

  ngAfterViewInit() {
    this.patients.paginator = this.paginator;
    this.patients.sort = this.sort;
    this.nbr_patiens = this.patients.data.length;
  }

  //displayedColumns: string[] = ['First Name', 'Last Name', 'Service'];
  displayedColumnsPatients: string[] = ['patient_code', 'first_name', 'last_name', 'address', 'age', 'gender', 'assurance', 'phone'];
  columnsToDisplayWithExpand = [...this.displayedColumnsPatients, 'expand'];
  expandedElement: PatientModel | null;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.patients.filter = filterValue.trim().toLowerCase();

    if (this.patients.paginator) {
      this.patients.paginator.firstPage();
    }
  }

  goToAddPatient() {
    this.router.navigate(['/add_patient']);
  }

}
