import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginService } from './sharedService/login.service';
import { AuthInterceptor } from './auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [LoginService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true  
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
