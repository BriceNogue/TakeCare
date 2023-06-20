import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acces-rights',
  templateUrl: './acces-rights.component.html',
  styleUrls: ['./acces-rights.component.scss']
})
export class AccesRightsComponent {

  constructor(
    private router: Router,
  ){}

  goToManageAcces() {
    this.router.navigate(['/acces/manage'])
  }
}
