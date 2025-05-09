import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { AvailableprofileComponent } from './availableprofile/availableprofile.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
  { path: 'createprofile', component: CreateprofileComponent },
  { path: 'availableprofile', component: AvailableprofileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
