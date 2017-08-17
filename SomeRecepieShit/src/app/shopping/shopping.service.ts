import { Item } from './item.model'

export class ShoppingService{

  items: Item[]=[
      {name: 'some thing',quantity: 1},
      {name: 'some other thing',quantity: 3},
      {name: 'some thin else',quantity: 2}
  ];
  
  getItems(): Item[]{
    return this.items.slice()
  }

  addNewItem(newItem: Item | Item[]): void{

if(Array.isArray(newItem))
this.items=this.items.concat(newItem)
  else
this.items.push(newItem);
  }
}