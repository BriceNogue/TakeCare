import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AddAppointmentComponent } from './components/appointment-module/add-appointment/add-appointment.component';
import { AppointmentDetailsComponent } from './components/appointment-module/appointment-details/appointment-details.component';
import { AppointmentComponent } from './components/appointment-module/appointment/appointment.component';
import { EditAppointmentComponent } from './components/appointment-module/edit-appointment/edit-appointment.component';
import { AddConsultationComponent } from './components/consultation-module/add-consultation/add-consultation.component';
import { ConsultatioDetailsnComponent } from './components/consultation-module/consultatio-detailsn/consultatio-detailsn.component';
import { ConsultationComponent } from './components/consultation-module/consultation/consultation.component';
import { DashboardComponent } from './components/dashboard-module/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddPatientComponent } from './components/patient-module/add-patient/add-patient.component';
import { DetailPatientComponent } from './components/patient-module/detail-patient/detail-patient.component';
import { EditPatientComponent } from './components/patient-module/edit-patient/edit-patient.component';
import { PatientsListComponent } from './components/patient-module/patients-list/patients-list.component';
import { PaymentComponent } from './components/payment-module/payment/payment.component';
import { PrescriptionComponent } from './components/prescription-module/prescription/prescription.component';
import { DetailServiceComponent } from './components/service-module/detail-service/detail-service.component';
import { EditServiceComponent } from './components/service-module/edit-service/edit-service.component';
import { ServiceListComponent } from './components/service-module/service-list/service-list.component';
import { AddUserComponent } from './components/user-module/add-user/add-user.component';
import { DetailUserComponent } from './components/user-module/detail-user/detail-user.component';
import { EditUserComponent } from './components/user-module/edit-user/edit-user.component';
import { UserListComponent } from './components/user-module/user-list/user-list.component';
import { RoleGuard } from './guards/role.guard';
import { AddServiceComponent } from './components/service-module/add-service/add-service.component';
import { AccesRightsComponent } from './components/acces_rights-module/acces-rights/acces-rights.component';
import { ManageAccesRightComponent } from './components/acces_rights-module/manage-acces-right/manage-acces-right.component';
import { AddAccesRightComponent } from './components/acces_rights-module/add-acces-right/add-acces-right.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ['Admin'],
    }
  },
  {
    path: "acces_rights", component: AccesRightsComponent, canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ['Admin'],
    }
  },
  {
    path: "add/acces_right/:id", component: AddAccesRightComponent, canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ['Admin'],
    }
  },
  {
    path: "acces/manage", component: ManageAccesRightComponent, canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ['Admin'],
    }
  },
  {
    path: "add_user", component: AddUserComponent, canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ['Admin'],
    }
  },
  {
    path: "users", component: UserListComponent, canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ['Admin'],
    }
  },
  {
    path: "user/:id", component: EditUserComponent, canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ['Admin'],
    }
  },
  { path: "users/:id", component: DetailUserComponent, canActivate: [AuthGuard] },
  { path: "patients", component: PatientsListComponent, canActivate: [AuthGuard] },
  { path: "add_patient", component: AddPatientComponent, canActivate: [AuthGuard] },
  { path: "patients/:id", component: DetailPatientComponent, canActivate: [AuthGuard] },
  { path: "patient/:id", component: EditPatientComponent, canActivate: [AuthGuard] },

  { path: "consultations", component: ConsultationComponent, canActivate: [AuthGuard] },
  { path: "add_consultation/:id", component: AddConsultationComponent },
  { path: "consultation_details/:id", component: ConsultatioDetailsnComponent },

  { path: "prescriptions", component: PrescriptionComponent, canActivate: [AuthGuard] },

  { path: "appointments", component: AppointmentComponent, canActivate: [AuthGuard] },
  { path: "add_appointment/:id", component: AddAppointmentComponent },
  { path: "edit_appointment/:id", component: EditAppointmentComponent },
  { path: "appointment_details/:id", component: AppointmentDetailsComponent },

  {
    path: "payments", component: PaymentComponent, canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ['Admin']
    }
  },

  {
    path: "add_service", component: AddServiceComponent, canActivate: [AuthGuard]
  },
  {
    path: "services", component: ServiceListComponent, canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ['Admin'],
    }
  },
  {
    path: "services/:id", component: DetailServiceComponent, canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ['Admin'],
    }
  },
  {
    path: "service/:id", component: EditServiceComponent, canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ['Admin'],
    }
  },
  { path: "login", component: LoginComponent },

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
