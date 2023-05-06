import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentModel } from 'src/app/models/appointment-model';
import { ConsultationModel } from 'src/app/models/consultation-model';
import { PatientCardModel } from 'src/app/models/pateint_card_model';
import { PatientModel } from 'src/app/models/patient-model';
import { UserModel } from 'src/app/models/user-model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ConsultationService } from 'src/app/services/consultation.service';
import { PatientCardService } from 'src/app/services/patient-card.service';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user-service.service';

import { AddExaminationComponent } from '../../examination-module/add-examination/add-examination.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.scss']
})
export class AddConsultationComponent implements OnInit {

  appointment: AppointmentModel | undefined;
  appointmentId: string | null;

  consultation: ConsultationModel;
  consultations: ConsultationModel[];

  user: UserModel | undefined;
  patient: PatientModel | undefined;

  patientCard: PatientCardModel = new PatientCardModel;

  received_data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private consultationService: ConsultationService,
    private appointmentService: AppointmentService,
    private userService: UserService,
    private patientService: PatientService,
    private patientCardService: PatientCardService,

    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    this.appointmentId = this.route.snapshot.paramMap.get('id');

    if (this.appointmentId) {
      this.appointmentService.getAppointmentById(this.appointmentId).subscribe(appointment => {
        this.appointment = appointment;

        if (this.appointment != undefined) {
          this.consultation = new ConsultationModel(

            this.appointment._id,
            this.appointment.patient_id,
            this.appointment.service_id,
            this.appointment.user_id
          );

          this.userService.getUserById(this.appointment.user_id).subscribe((user) => {
            this.user = user;
            this.patientCard.user_id = user!._id;
          });

          this.patientService.getPatientById(this.appointment.patient_id).subscribe((patient) => {
            this.patient = patient;
            this.patientCard.patient_id = patient._id;
          })

        }

      });
    } else {
      this.appointment = undefined;
      console.log("idddddd" + this.appointmentId);
    }

  }

  createConsultation() {
    if (this.appointment != undefined) {
      this.consultationService.addConsultation(this.consultation).subscribe((res) => {
        console.log(this.appointment);

        console.log(this.consultation)
      }
      )
    }
  }

  onSubmit() {
    this.patientCardService.addPatientCard(this.patientCard).subscribe((res) => {
    })
  }

  openDialog() {

    let dialogRef = this.dialog.open(AddExaminationComponent, {
      width:' 350px',
      disableClose: true,
      data: 'Are yous sure you want to delet ?',
    })

    dialogRef.afterClosed().subscribe(res => {
      this.received_data = res.data;
    })

    /*this.dialog.open(AddExaminationComponent, {
      width:' 350px',
      disableClose: true
    })*/

  }



  /*deleletConsultation() {
    if (this.appointmentId != null) {
      this.consultationService.getConsultations().subscribe((res: ConsultationModel[]) => {
        this.consultations = res.filter(
          (res: ConsultationModel) => {
           const appId = res.appointment_id.indexOf(this.appointment!._id);
           this.consultationService.deleteConsultation(appId!._id).subscribe();
          }
          
        )
      })
    }
  }*/

}
