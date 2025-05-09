import { Component } from '@angular/core';
import { LoginService } from '../sharedService/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signUpForm: FormGroup


  constructor(private signUpService:LoginService,private fb: FormBuilder ){
    this.signUpForm=this.fb.group({
      name: [''],
      mobileNo: [''] ,
      email: [''],
      psw: [''],
      pswrepeat: [''] 
    })
  }

  signUp(){
this.signUpService.doSignUp(this.signUpForm.value).subscribe(data=>{

console.log(data);

})
  }

}
