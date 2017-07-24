import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../recepie.model'
import { RecepieService } from '../recepie.service'
import { Item } from '../../shopping/item.model'

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  @Input () newItemToBeAdded: Recepie=null;
@Output() recepieSelectedFromList = new EventEmitter<Recepie> ();


  constructor(private recepiesServ: RecepieService) { }

  recepies: Recepie[];

  ngOnInit() {
  this.recepiesServ.recepieSelected.subscribe((rece:Recepie)=>console.log("caigjt"));
    this.recepies = this.recepiesServ.getRecepies();

    this.recepiesServ.newAddition.subscribe(
      (newList: Recepie[])=>
      {this.recepies = newList;}
    );
  }

ngOnChanges(){
  if(this.newItemToBeAdded)
    {
     var newrec:Recepie = new Recepie(this.newItemToBeAdded.name,this.newItemToBeAdded.description,this.newItemToBeAdded.image,this.newItemToBeAdded.Ingredients);
 // this.recepies.push(newrec);
    
  this.recepiesServ.addNewRecepie(newrec);
  console.log(this.recepiesServ.getRecepies())
}
}

recepieSelectedEmittedEventfromList(SelectedRecepie:Recepie):  void{
    console.log("in list");
  this.recepieSelectedFromList.emit(SelectedRecepie);
}
}
