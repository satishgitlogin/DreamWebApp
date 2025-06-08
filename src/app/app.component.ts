import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  showdiv: boolean=true;
  
  

  show(){
    this.showdiv=false;
  }


}
