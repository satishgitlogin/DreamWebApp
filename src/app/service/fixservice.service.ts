import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FixserviceService {
  booking: any;

  constructor() { }

bookingdata(user:any){

  this.booking=user;
}
setbooking(){
  return this.booking;
}

}
