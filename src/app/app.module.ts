import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPrintModule } from 'ngx-print';
import { ChartModule } from 'angular-highcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/user-module/add-user/add-user.component';
import { UserListComponent } from './components/user-module/user-list/user-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PatientsListComponent } from './components/patient-module/patients-list/patients-list.component';
import { MaterialModule } from './material/material.module';
import { UserFormComponent } from './components/user-module/user-form/user-form.component';
import { EditUserComponent } from './components/user-module/edit-user/edit-user.component';
import { AddPatientComponent } from './components/patient-module/add-patient/add-patient.component';
import { EditPatientComponent } from './components/patient-module/edit-patient/edit-patient.component';
import { PatientFormComponent } from './components/patient-module/patient-form/patient-form.component';
import { AppointmentComponent } from './components/appointment-module/appointment/appointment.component';
import { ConsultationComponent } from './components/consultation-module/consultation/consultation.component';
import { PrescriptionComponent } from './components/prescription-module/prescription/prescription.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DashboardComponent } from './components/dashboard-module/dashboard/dashboard.component';
import { ScheduleModule,
         RecurrenceEditorModule, 
         DayService, 
         WeekService, 
         WorkWeekService, 
         MonthService, 
         AgendaService, 
         DragAndDropService, 
         ResizeService,
         TimelineViewsService,
         TimelineMonthService,

        } from '@syncfusion/ej2-angular-schedule';

import { UserService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailUserComponent } from './components/user-module/detail-user/detail-user.component';
import { ServiceListComponent } from './components/service-module/service-list/service-list.component';
import { AddServiceComponent } from './components/service-module/add-service/add-service.component';
import { EditServiceComponent } from './components/service-module/edit-service/edit-service.component';
import { ServiceFormComponent } from './components/service-module/service-form/service-form.component';
import { DetailServiceComponent } from './components/service-module/detail-service/detail-service.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { DetailPatientComponent } from './components/patient-module/detail-patient/detail-patient.component';
import { AppointmentCalandarComponent } from './components/appointment-module/appointment-calandar/appointment-calandar.component';
import { AppointmentFormComponent } from './components/appointment-module/appointment-form/appointment-form.component';
import { AddAppointmentComponent } from './components/appointment-module/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './components/appointment-module/edit-appointment/edit-appointment.component';
import { AppointmentListComponent } from './components/appointment-module/appointment-list/appointment-list.component';
import { AppointmentDetailsComponent } from './components/appointment-module/appointment-details/appointment-details.component';
import { AddConsultationComponent } from './components/consultation-module/add-consultation/add-consultation.component';
import { EditConsultationComponent } from './components/consultation-module/edit-consultation/edit-consultation.component';
import { ConsultatioDetailsnComponent } from './components/consultation-module/consultatio-detailsn/consultatio-detailsn.component';
import { CircularChartComponent } from './components/dashboard-module/circular-chart/circular-chart.component';
import { AddPrescriptionComponent } from './components/prescription-module/add-prescription/add-prescription.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { ScrollDirective } from './directives/scroll.directive';
import { AddExaminationComponent } from './components/examination-module/add-examination/add-examination.component';
import { ExaminationListComponent } from './components/examination-module/examination-list/examination-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    NavBarComponent,
    HomeComponent,
    AddUserComponent,
    UserListComponent,
    NotFoundComponent,
    PatientsListComponent,
    UserFormComponent,
    EditUserComponent,
    AddPatientComponent,
    EditPatientComponent,
    PatientFormComponent,
    AppointmentComponent,
    ConsultationComponent,
    PrescriptionComponent,
    PaymentComponent,
    DashboardComponent,
    DetailUserComponent,
    ServiceListComponent,
    AddServiceComponent,
    EditServiceComponent,
    ServiceFormComponent,
    DetailServiceComponent,
    LoginComponent,
    DetailPatientComponent,
    AppointmentCalandarComponent,
    AppointmentFormComponent,
    AddAppointmentComponent,
    EditAppointmentComponent,
    AppointmentListComponent,
    AppointmentDetailsComponent,
    AddConsultationComponent,
    EditConsultationComponent,
    ConsultatioDetailsnComponent,
    CircularChartComponent,
    AddPrescriptionComponent,
    ScrollDirective,
    AddExaminationComponent,
    ExaminationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ScheduleModule,
    RecurrenceEditorModule,
    NgxPrintModule,
    ChartModule,

    CommonModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModalModule
  ],
  providers: [
    DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService, 
    AgendaService,
    DragAndDropService,
    ResizeService,
    TimelineViewsService,
    TimelineMonthService,

    AuthInterceptorProvider,
    UserService,
    //AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
