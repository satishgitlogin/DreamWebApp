import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { AppComponent } from './app.component';
import { ViewticketComponent } from './viewticket/viewticket.component';
import { ProfileComponent } from './profile/profile.component';
import { JourneytktComponent } from './journeytkt/journeytkt.component';

const routes: Routes = [

  {path: '', component:JourneytktComponent },
  {path: 'showtkt', component:ShowComponent },
  {path: 'profile', component:ProfileComponent },
   {path: 'journeytkt', component:JourneytktComponent },
  {path: 'showtkt/viewtkt', component:ViewticketComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
