import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddPatientComponent } from './components/patient-module/add-patient/add-patient.component';
import { EditPatientComponent } from './components/patient-module/edit-patient/edit-patient.component';
import { PatientsListComponent } from './components/patient-module/patients-list/patients-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { DetailServiceComponent } from './components/service-module/detail-service/detail-service.component';
import { EditServiceComponent } from './components/service-module/edit-service/edit-service.component';
import { ServiceListComponent } from './components/service-module/service-list/service-list.component';
import { AddUserComponent } from './components/user-module/add-user/add-user.component';
import { DetailUserComponent } from './components/user-module/detail-user/detail-user.component';
import { EditUserComponent } from './components/user-module/edit-user/edit-user.component';
import { UserListComponent } from './components/user-module/user-list/user-list.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"add_user", component: AddUserComponent},
  {path:"users", component: UserListComponent},
  {path:"user/:id", component: EditUserComponent},
  {path:"users/:id", component: DetailUserComponent},
  {path:"patients", component: PatientsListComponent},
  {path:"add_patient", component: AddPatientComponent},
  {path:"patient/:id", component: EditPatientComponent},
  {path:"consultations", component: ConsultationComponent},
  {path:"prescriptions", component: PrescriptionComponent},
  {path:"appointments", component: AppointmentComponent},
  {path:"payments", component: PaymentComponent},
  {path:"services", component: ServiceListComponent},
  {path:"services/:id", component: DetailServiceComponent},
  {path:"service/:id", component: EditServiceComponent},
  {path:"login", component: LoginComponent},

  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
