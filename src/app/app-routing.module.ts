import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddUserComponent } from './components/user-module/add-user/add-user.component';
import { UserListComponent } from './components/user-module/user-list/user-list.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"add_user", component: AddUserComponent},
  {path:"user_list", component: UserListComponent},

  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
