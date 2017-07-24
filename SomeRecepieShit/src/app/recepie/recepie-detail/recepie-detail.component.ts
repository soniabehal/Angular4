import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../recepie.model'
import { Item } from '../../shopping/item.model'
import { ShoppingService } from '../../shopping/shopping.service'

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {

  @Output() newRecepieToBeAdded = new EventEmitter<Recepie>();
  
  @ViewChild ('NewName') NewName : ElementRef;
  @ViewChild ('NewDesc') NewDesc : ElementRef;
  @ViewChild ('NewImg') NewImg : ElementRef;

  @Input() DetailsTODisplay: Recepie;

  showAddNewItemBox: boolean = false;

  constructor(private ShoppingServ: ShoppingService) { }

  ngOnInit() {
   // this.RecepieServ.recepieSelected.subscribe((rece:Recepie)=>console.log("caigjt"));
  }
  
  addNewItem(){
    var newRec:Recepie = 
    new Recepie(
      this.NewName.nativeElement.value,
      this.NewDesc.nativeElement.value,
      this.NewImg.nativeElement.value,
      [new Item('one',3),new Item('ws',2)]
    );

    this.newRecepieToBeAdded.emit(newRec);

  }

  exportIngToShoppingList(IngredientsOfSelectedRecepie:Item[]){
this.ShoppingServ.addNewItem(IngredientsOfSelectedRecepie);
  }
}
