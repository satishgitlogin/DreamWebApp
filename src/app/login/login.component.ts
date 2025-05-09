import { Component } from '@angular/core';
import { LoginService } from '../sharedService/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginform:FormGroup
  constructor(private LoginService:LoginService,private fb: FormBuilder,private router: Router){
    this.loginform=this.fb.group({
      id: [''],
      password: [''] 
    })
    }

  login(){
    if (this.loginform.valid) {
      console.log('Form Submitted!', this.loginform.value);
    } else {
      console.log('Form is invalid');
    }

    this.LoginService.doLogin(this.loginform.value).subscribe(data=>{
      console.log(data);
      sessionStorage.setItem('authToken', data.token);
      console.log(sessionStorage.setItem('authToken', data.token));
      this.router.navigate(['/dashboard']);

      
    }
     
     
    )
  }

}
