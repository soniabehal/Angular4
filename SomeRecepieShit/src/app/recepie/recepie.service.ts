import { EventEmitter } from '@angular/core'
import { Recepie } from './recepie.model'
import { Item } from '../shopping/item.model'

export class RecepieService{

  recepieSelected = new EventEmitter<Recepie>();
  newAddition = new EventEmitter<Recepie[]>();

  recepies : Recepie[]=[
    new Recepie('Reci1','Some description bro','http://amazingribs.com/images/recipes/blue_cheese_potato_salad.jpg',[new Item('tone',1),new Item('wiss',4)]),
    new Recepie('Reci2','Some description bro agian','http://amazingribs.com/images/recipes/blue_cheese_potato_salad.jpg',[new Item('tone',1),new Item('wiss',4)]),
    new Recepie('Reci3','OH yeah Some description bro','http://amazingribs.com/images/recipes/blue_cheese_potato_salad.jpg',[new Item('bli',2),new Item('Ows',12)])
  ];


  getRecepies(){
    return this.recepies.slice();
  }

  addNewRecepie(newItem: Recepie){
this.recepies.push(newItem);
this.newAddition.emit(this.recepies.slice());
  }
}