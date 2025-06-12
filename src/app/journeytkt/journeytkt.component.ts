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

  constructor(private service :FixserviceService){

  } 

onSubmit(){
  console.log(this.user);
  this.service.bookingdata(this.user);
}
}
