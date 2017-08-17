import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recepie } from './recepie.model'

import { RecepieListComponent } from './recepie-list/recepie-list.component'
import { RecepieService } from './recepie.service'

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css'],
  providers: [RecepieService]
})
export class RecepieComponent implements OnInit{

selectedRecepieToDisplayDetails: Recepie;
newRecepieToBeAdded: Recepie;

constructor(private recepieServ: RecepieService){}

ngOnInit(){
   this.recepieServ.recepieSelected.subscribe((rece:Recepie)=>{
     this.selectedRecepieToDisplayDetails = rece;
  });

  
}

addNewRecepie(event){

  this.newRecepieToBeAdded = new Recepie(event.name,event.description,event.image,event.ing);
}

}
