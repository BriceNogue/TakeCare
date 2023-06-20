import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/service-model';
import { HServiceService } from 'src/app/services/h-service.service';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.scss']
})
export class DetailServiceComponent implements OnInit {

  serviceModel: ServiceModel|undefined;

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
      alert('No Service found!');
    }
  }

  deleteService(service: ServiceModel) {
    this.hService.deleteService(service).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/services'])
    });
  }

  goToEditService(service: ServiceModel) {
    this.router.navigate(['/service/'+service._id]);
  }

  goToServices() {
    this.router.navigate(['/services']);
  }

}
