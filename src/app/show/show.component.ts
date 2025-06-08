import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-show',
  standalone: false,
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit {
 
  @Output() message=new EventEmitter<any>()
 
  ngOnInit(): void {

    this.message.emit(true);
    
  }

  

}
