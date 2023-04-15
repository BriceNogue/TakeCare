import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPatients() {
    this.router.navigate(['/patients']);
  }

}
