import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppointmentModel } from 'src/app/models/appointment-model';
import { PaymentModel } from 'src/app/models/payment-model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  payments: MatTableDataSource<PaymentModel>;
  nbr_payments: Number = 0;

  displayedColumns: string[] =
    [
      'payment_code',
      'patient_card',
      'amount_to_be_paid',
      'amount_paid',
      'user',
      'status',
      'actions'
    ];

  constructor(
    private paymentService: PaymentService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllPayments();
  }

  ngAfterViewInit(): void {
    this.payments.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.payments.filter = filterValue.trim().toLowerCase();
  
    if(this.payments.paginator) {
      this.payments.paginator.firstPage();
    }
  }
  
  getAllPayments() {
    this.paymentService.getPayments().subscribe((payments) => {
      this.payments = new MatTableDataSource(payments.reverse()),
      this.payments.paginator = this.paginator;
      this.nbr_payments = this.payments.data.length;
      console.log(this.payments);
    })
  }

  goToPaymentDetails(paymentId: string) {
    this.router.navigate(['/payment_details/'+paymentId]);
  }
  
  goToMakePayment(patientCardId: string) {
    this.router.navigate(['/add_payment/'+patientCardId]);
    console.log(patientCardId);
    
  }

}
