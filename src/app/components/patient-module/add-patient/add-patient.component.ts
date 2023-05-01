import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientModel } from 'src/app/models/patient-model';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  patient: PatientModel;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.patient = new PatientModel();
  }

  goToPatients() {
    this.router.navigate(['/patients']);
  }

}
