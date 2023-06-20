import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { AppointmentModel } from 'src/app/models/appointment-model';
import { HoursModel } from 'src/app/models/hours-model';
import { PatientModel } from 'src/app/models/patient-model';
import { ServiceModel } from 'src/app/models/service-model';
import { UserModel } from 'src/app/models/user-model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { HServiceService } from 'src/app/services/h-service.service';
import { HoursService } from 'src/app/services/hours.service';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit, AfterViewInit {

  @Input() patient: PatientModel;
  @Input() appointment: AppointmentModel;

  //date = new FormControl(new Date());

  services: ServiceModel[];
  isAddForm: boolean;
  users: UserModel[];
  hours: HoursModel[];
  commingUrl: string|null;
  /*selectedService: any = {
    id: 0,
    name: ''
  }*/

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private h_service: HServiceService,
    private hoursService: HoursService,
    private appointmentService: AppointmentService,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.isAddForm = this.router.url.includes('add');

    //this.commingUrl = this.route.snapshot.paramMap.getAll('service')
    this.patient = new PatientModel();

    this.showAllService();
    this.onSelect(this.appointment.service_id);

    this.showAllUsers();

  }

  showAllService() {
    this.h_service.getServices().subscribe((services) => {
      this.services = services
    });
  }

  showAllUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users
    })
  }

  onSelect(service_id: any) {
    this.hoursService.getHours().subscribe((res: HoursModel[]) => {
      this.hours = res.filter(
        (res: HoursModel) => res.service_id.includes(service_id)
      ),
        console.log(service_id);
        console.log(this.hours);

    })
  }

  ngAfterViewInit(): void {
    
  }

  onSubmit() {
    if (this.isAddForm) {
      this.appointmentService.addAppointment(this.appointment)
        .subscribe(() => this.router.navigate(['/appointments']));
    } else {
      this.appointmentService.updateAppointment(this.appointment)
        .subscribe(() => this.router.navigate(['/appointments', this.appointment._id]));
    }
  }

  goBack() {
    this.location.back()
  }

}
