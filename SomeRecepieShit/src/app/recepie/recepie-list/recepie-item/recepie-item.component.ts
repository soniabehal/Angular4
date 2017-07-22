import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../../recepie.model'
@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

 @Input('recItem') recepieItem : Recepie;
 @Output() recepieSelectedEmittedEventfromItem = new EventEmitter<void>();

 selectedRecepie : Recepie;

  constructor() { }


  ngOnInit() {
  }

  onSelectedFromItem(){
      console.log("in item");

this.recepieSelectedEmittedEventfromItem.emit();
  }

}
