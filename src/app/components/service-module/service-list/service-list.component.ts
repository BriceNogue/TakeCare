import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/service-model';
import { HServiceService } from 'src/app/services/h-service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  services: MatTableDataSource<ServiceModel>;
  nbr_services: Number = 0;

  displayedColumns: string[] =
    [
      'Service Id',
      'Service Code',
      'Libelle',
      'Actions'
    ];

  constructor(
    private hService: HServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllServices()
  }

  ngAfterViewInit(): void {
    this.services.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.services.filter = filterValue.trim().toLowerCase();

    if (this.services.paginator) {
      this.services.paginator.firstPage();
    }
  }

  getAllServices() {
    this.hService.getServices().subscribe((services) => {
      this.services = new MatTableDataSource(services.reverse()),
        this.services.paginator = this.paginator;
      this.nbr_services = this.services.data.length;
      console.log(this.services);
    })
  }

  goToAddService() {
    this.router.navigate(['/add_service']);
  }

  deleteService(service: ServiceModel) {
    this.hService.deleteService(service).subscribe();
    this.getAllServices();
  }

  goToServiceDetails(serviceId: string) {
    this.router.navigate(['/services/' + serviceId]);
  }
}
