import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/service-model';
import { HServiceService } from 'src/app/services/h-service.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent implements OnInit {

  serviceModel: ServiceModel|undefined

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hService: HServiceService
  ) { }

  ngOnInit(): void {
    const serviceId: string|null = this.route.snapshot.paramMap.get('id');

    if(serviceId) {
      this.hService.getServiceById(serviceId).subscribe(service => {
        this.serviceModel = service;
      })
    }else {
      this.serviceModel = undefined;
    }
  }

}
