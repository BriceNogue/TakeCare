import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentModel } from 'src/app/models/appointment-model';
import { PatientModel } from 'src/app/models/patient-model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {

  appointment: AppointmentModel;
  patient: PatientModel;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.appointment = new AppointmentModel();
    const patientId: string|null = this.route.snapshot.paramMap.get('id');
    if(patientId) {
      this.patientService.getPatientById(patientId).subscribe(patient => this.patient = patient);
    }else{
      //this.patient = undefined;
      console.log("idddddd"+patientId);
    }
  }

}
