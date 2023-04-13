import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddPatientComponent } from './components/patient-module/add-patient/add-patient.component';
import { EditPatientComponent } from './components/patient-module/edit-patient/edit-patient.component';
import { PatientsListComponent } from './components/patient-module/patients-list/patients-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { AddUserComponent } from './components/user-module/add-user/add-user.component';
import { EditUserComponent } from './components/user-module/edit-user/edit-user.component';
import { UserListComponent } from './components/user-module/user-list/user-list.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"add_user", component: AddUserComponent},
  {path:"users", component: UserListComponent},
  {path:"user/id", component: EditUserComponent},
  {path:"patients", component: PatientsListComponent},
  {path:"add_patient", component: AddPatientComponent},
  {path:"patient/id", component: EditPatientComponent},
  {path:"consultations", component: ConsultationComponent},
  {path:"prescriptions", component: PrescriptionComponent},
  {path:"appointments", component: AppointmentComponent},
  {path:"payments", component: PaymentComponent},

  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
