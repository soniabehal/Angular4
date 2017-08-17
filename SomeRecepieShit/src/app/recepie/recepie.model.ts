import { Item}  from '../shopping/item.model'

export class Recepie {

    
    constructor(public name: string,public description: string, public image: string,public Ingredients: Item[]){}

}