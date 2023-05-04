import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentModel } from 'src/app/models/appointment-model';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {

  }


}
