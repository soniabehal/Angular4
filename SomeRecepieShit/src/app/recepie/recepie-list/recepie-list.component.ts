import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../recepie.model'

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  @Input () newItemToBeAdded: Recepie=null;
@Output() recepieSelectedFromList = new EventEmitter<Recepie> ();


  recepies : Recepie[]=[
    new Recepie('Reci1','Some description bro','http://amazingribs.com/images/recipes/blue_cheese_potato_salad.jpg'),
    new Recepie('Reci2','Some description bro agian','http://amazingribs.com/images/recipes/blue_cheese_potato_salad.jpg'),
    new Recepie('Reci3','OH yeah Some description bro','http://amazingribs.com/images/recipes/blue_cheese_potato_salad.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

ngOnChanges(){
  if(this.newItemToBeAdded)
  this.recepies.push(new Recepie(this.newItemToBeAdded.name,this.newItemToBeAdded.description,this.newItemToBeAdded.image));
}

recepieSelectedEmittedEventfromList(SelectedRecepie:Recepie):  void{
    console.log("in list");
  this.recepieSelectedFromList.emit(SelectedRecepie);
}
}
