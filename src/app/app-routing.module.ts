import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './AllComponents/DashBoard/dashboard/dashboard.component';
import { AddUsersComponent } from './AllComponents/Admin/add-users/add-users.component';

const routes: Routes = [
  {
 
    path:'add-users',
    component:AddUsersComponent
   

  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
