import { Component } from '@angular/core';
import { FixserviceService } from '../service/fixservice.service';

@Component({
  selector: 'app-viewticket',
  standalone: false,
  templateUrl: './viewticket.component.html',
  styleUrl: './viewticket.component.css'
})
export class ViewticketComponent {

bookingpara = {
    source: '',
    destination: '',
    adult: '',
     fare: '',
      date: '',
    
  };

constructor(private service:FixserviceService){}


ngOnInit(): void {

    


    this.bookingpara=this.service.setbooking();
    console.log(this.bookingpara);
    
  }



}
