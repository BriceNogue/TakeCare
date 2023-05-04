import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppointmentModel } from 'src/app/models/appointment-model';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  appointments: MatTableDataSource<AppointmentModel>;
  nbr_appointments: Number = 0;

  displayedColumns: string[] = 
  [
    'Appointment Code', 
    'Appointment Date', 
    'Date Of Appointment', 
    'Hours', 
    'Service', 
    //'Patient Name',
    'Patient Id',
    //'Dr Name',
    'Dr Id',
    'Actions'
  ];

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllAppointments()
  }

  ngAfterViewInit(): void {
      this.appointments.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.appointments.filter = filterValue.trim().toLowerCase();

    if(this.appointments.paginator) {
      this.appointments.paginator.firstPage();
    }
  }

  getAllAppointments() {
    this.appointmentService.getAppointments().subscribe((appointments) => {
      this.appointments = new MatTableDataSource(appointments.reverse()),
      this.appointments.paginator = this.paginator;
      this.nbr_appointments = this.appointments.data.length;
      console.log(this.appointments);
    })
  }

  goToAppointmentDetail(appointmentId: string) {
    this.router.navigate(['/appointment_details/'+appointmentId]);
  }

  goToMakeConsultation(appointmentId: string) {
    this.router.navigate(['/add_consultation/'+appointmentId]);
    console.log(appointmentId);
    
  }

}
