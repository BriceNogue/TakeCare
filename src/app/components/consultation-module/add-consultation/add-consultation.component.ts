import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentModel } from 'src/app/models/appointment-model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ConsultationService } from 'src/app/services/consultation.service';

@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.scss']
})
export class AddConsultationComponent implements OnInit {

  appointment: AppointmentModel | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private consultationService: ConsultationService,
    private appointmentService: AppointmentService,
  ) { }

  ngOnInit(): void {

    const appointmentId: string | null = this.route.snapshot.paramMap.get('id');
    if (appointmentId) {
      this.appointmentService.getAppointmentById(appointmentId).subscribe(appointment => {
        this.appointment = appointment;
        console.log(appointment);
        
      });
    } else {
      this.appointment = undefined;
      console.log("idddddd" + appointmentId);
    }
    
  }

  createConsultation() {
    this.consultationService.addConsultation()
  }

}
