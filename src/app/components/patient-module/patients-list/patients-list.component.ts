import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator'
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PatientModel } from 'src/app/models/patient-model';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

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
export class PatientsListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  PATIENTS: PatientModel[] = [];

  patients: MatTableDataSource<PatientModel>;
  nbr_patiens: Number = 0;

  //displayedColumns: string[] = ['First Name', 'Last Name', 'Service'];
  displayedColumnsPatients: string[] = ['patient_code', 'first_name', 'last_name', 'address', 'age', 'gender', 'assurance', 'phone'];
  columnsToDisplayWithExpand = [...this.displayedColumnsPatients, 'expand'];
  expandedElement: PatientModel | null;

  constructor(private router: Router, private patientService: PatientService) { 
    this.patients = new MatTableDataSource(this.PATIENTS);
  }
  
  ngOnInit(): void {
	  this.patientService.getPatients().subscribe(patients => {
		this.patients = new MatTableDataSource(patients),
		this.patients.paginator = this.paginator;
		this.nbr_patiens = this.patients.data.length;
	  })
  }

  ngAfterViewInit() {
    this.patients.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.patients.filter = filterValue.trim().toLowerCase();

    if (this.patients.paginator) {
      this.patients.paginator.firstPage();
    }
  }

  goToPatientDetail(patientId: string) {
	  this.router.navigate(['/patients/'+patientId]);
  }

  goToAddPatient() {
    this.router.navigate(['/add_patient']);
  }

}
