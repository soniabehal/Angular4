import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service'
import { Item } from './item.model'

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor(private ShoppingServ: ShoppingService) { }

  allItems: Item[]; 
  ngOnInit() {
this.allItems  = this.ShoppingServ.getItems();
  }

}
