import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AvailableprofileComponent } from './availableprofile/availableprofile.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AvailableprofileComponent,
    CreateprofileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
