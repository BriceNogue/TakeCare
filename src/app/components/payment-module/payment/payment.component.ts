import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppointmentModel } from 'src/app/models/appointment-model';
import { PatientCardModel } from 'src/app/models/pateint_card_model';
import { PaymentModel } from 'src/app/models/payment-model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { PatientCardService } from 'src/app/services/patient-card.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator1: MatPaginator;
  @ViewChild(MatSort) sort1: MatSort;

  payments: MatTableDataSource<PaymentModel>;
  nbr_payments: Number = 0;
  patientCards: MatTableDataSource<PatientCardModel>;
  nbr_cards: Number = 0;

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

  displayedColumns1: string[] =
    [
      'card_code',
      'user',
      'patient',
      'amount'
    ];

  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private patientCardService: PatientCardService
  ) { }

  ngOnInit(): void {
    this.getAllPayments();
    this.getAllCards();
  }

  ngAfterViewInit(): void {
    this.payments.sort = this.sort;
    this.patientCards.sort = this.sort1 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.payments.filter = filterValue.trim().toLowerCase();
  
    if(this.payments.paginator) {
      this.payments.paginator.firstPage();
    }
  }

  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.patientCards.filter = filterValue.trim().toLowerCase();
  
    if(this.patientCards.paginator) {
      this.patientCards.paginator.firstPage();
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

  getAllCards() {
    this.patientCardService.getPatientCards().subscribe((cards) => {
      this.patientCards = new MatTableDataSource(cards.reverse()),
      this.patientCards.paginator = this.paginator1;
      this.nbr_cards = this.patientCards.data.length;
      console.log(this.patientCards);
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
