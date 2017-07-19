import { Component, OnInit,Input,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homestring="Welcome to Home Component";
  string="this is string";
  constructor() { }
  function(){
    alert("You are in function");
  }
  @Input() son;   //data transfer from app to home
  @Output() onYell=new EventEmitter();   //data transfer from home to app
  /*son={
    name:"wisdon",
    age:'19',
  };*/

  fireYellEvent(e){
    this.onYell.emit(e);
  }
  ngOnInit() {
  }

}
