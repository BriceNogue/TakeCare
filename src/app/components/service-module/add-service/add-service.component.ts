import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/service-model';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {

  serviceModel: ServiceModel;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.serviceModel = new ServiceModel();
  }

}
