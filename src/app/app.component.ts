import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  show: boolean=false;
  

  view(){
    this.show=true;
  }
  back(){
    this.show=false;
  }
}
