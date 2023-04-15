import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientModel } from 'src/app/models/patient-model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  @Input() patient: PatientModel = new PatientModel;
  isAddForm: boolean;
  title: string = '';
  hide: boolean = true;

  constructor(private router: Router, private patientService: PatientService) {}

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');

    if(this.isAddForm) {
      this.title = 'Add Patient'
    }else{
      this.title = 'Edite Patient '+ this.patient.first_name;
    }
  }

  onSubmit() {
    if(this.isAddForm) {
      this.patientService.addPatient(this.patient)
      .subscribe((patient: PatientModel) => this.router.navigate(['/patient', patient.id]));
    }else{
      this.patientService.updatePatient(this.patient)
      .subscribe(() => this.router.navigate(['/patient', this.patient.id]));
    }
  }

}


