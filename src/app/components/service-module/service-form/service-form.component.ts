import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/service-model';
import { HServiceService } from 'src/app/services/h-service.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent implements OnInit {

  @Input() serviceModel: ServiceModel;
  isAddForm: boolean;
  hide: boolean = true;
  title: string = '';

  constructor(
    private router: Router,
    private hService: HServiceService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');

    if (this.isAddForm) {
      this.title = 'Add Service'
    } else {
      this.title = 'Edit Service: ' + this.serviceModel.libelle;
    }
  }

  onSubmit() {
    if (this.isAddForm) {
      this.hService.addService(this.serviceModel)
        .subscribe((service: ServiceModel) => this.router.navigate(['/services', service._id]));
    } else {
      this.hService.updateServive(this.serviceModel)
        .subscribe(() => this.router.navigate(['/services', this.serviceModel._id]));
    }
  }

  goBack() {
    this.location.back();
  }

}
