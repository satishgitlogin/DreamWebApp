import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
 // { path: 'dashboard',loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)  },
  { path: 'createprofile',component:ProfileComponent,canActivate:[AuthGuard]},
  
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', redirectTo: '' }  // catch-all route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
