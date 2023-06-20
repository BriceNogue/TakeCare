import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientModel } from 'src/app/models/patient-model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {

  patient: PatientModel|undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientService: PatientService,
  ) { }

  ngOnInit(): void {
    const patientId: string | null = this.route.snapshot.paramMap.get('id');
    if (patientId) {
      this.patientService.getPatientById(patientId).subscribe(patient => this.patient = patient);
    } else {
      this.patient = undefined;
    }
  }

  goToPatients() {
    this.router.navigate(['/patients']);
  }

}
