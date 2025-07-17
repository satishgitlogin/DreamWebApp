import { Component } from '@angular/core';
import { FixserviceService } from '../service/fixservice.service';

@Component({
  selector: 'app-journeytkt',
  standalone: false,
  templateUrl: './journeytkt.component.html',
  styleUrl: './journeytkt.component.css'
})
export class JourneytktComponent {
 user = {
    source: '',
    destination: '',
    adult: '',
     fare: '',
      date: '',
    
  };
  showdiv: boolean=true;
  instructions: boolean=false;
  paper: boolean=false;
  constructor(private service :FixserviceService){

  } 

onSubmit(){
  console.log(this.user);
  this.service.bookingdata(this.user);
}


  show(){
    this.showdiv=false;
  }
  handleChange(event:any){

    this.instructions=true;
    this.paper=false;
  }
    handlepaper(event:any){

   this.instructions=false;
    this.paper=true;
  }
}
