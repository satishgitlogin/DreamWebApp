import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { AppComponent } from './app.component';
import { ViewticketComponent } from './viewticket/viewticket.component';

const routes: Routes = [

  {path: 'showtkt', component:ShowComponent },
  {path: 'showtkt/viewtkt', component:ViewticketComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
