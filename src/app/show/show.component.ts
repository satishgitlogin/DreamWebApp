import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FixserviceService } from '../service/fixservice.service';

@Component({
  selector: 'app-show',
  standalone: false,
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit {
 
  @Output() message=new EventEmitter<any>()

bookingpara = {
    source: '',
    destination: '',
    adult: '',
     fare: '',
      date: '',
    
  };

  constructor(private service:FixserviceService){}


 
  ngOnInit(): void {

    this.message.emit(true);

    this.bookingpara=this.service.setbooking();
   
    console.log(this.bookingpara);
    
  }

  


  

}
