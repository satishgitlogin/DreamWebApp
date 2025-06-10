import { Component } from '@angular/core';

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
    
  };

onSubmit(){
  console.log(this.user);
}
}
