import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FormsModule,
    MaterialModule,
    ScheduleModule,
    RecurrenceEditorModule,

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

    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
