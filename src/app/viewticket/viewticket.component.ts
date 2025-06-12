import { Component } from '@angular/core';
import { FixserviceService } from '../service/fixservice.service';

@Component({
  selector: 'app-viewticket',
  standalone: false,
  templateUrl: './viewticket.component.html',
  styleUrl: './viewticket.component.css'
})
export class ViewticketComponent {
bookingpara: any;
constructor(private service:FixserviceService){}


ngOnInit(): void {

    

    this.bookingpara=this.service.setbooking();
    alert("booked")
    console.log(this.bookingpara);
    
  }



}
