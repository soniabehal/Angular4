import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recepie } from './recepie.model'

import { RecepieListComponent } from './recepie-list/recepie-list.component'

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css']
})
export class RecepieComponent {

 // @Output() addRecepies: EventEmitter<Recepie> = new EventEmitter<Recepie>();
  
selectedRecepieToDisplayDetails: Recepie;
newRecepieToBeAdded: Recepie;


recepieSelectedFromParent(recievedSelectedRecepie: Recepie){
  this.selectedRecepieToDisplayDetails = recievedSelectedRecepie;
  console.log("in parent");
}

addNewRecepie(event){

  this.newRecepieToBeAdded = new Recepie(event.name,event.description,event.image);
  //this.newRecepieToBeAdded.description = event.description;
  //this.newRecepieToBeAdded.image= event.image;
  
  //this.addRecepies.emit(event);
  
}

}
