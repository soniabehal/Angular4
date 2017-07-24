import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../../recepie.model'
import { RecepieService } from '../../recepie.service'

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

 @Input('recItem') recepieItem : Recepie;

 selectedRecepie : Recepie;

  constructor(private recepieServ: RecepieService) { }


  ngOnInit() {
    console.log(this.recepieItem.Ingredients[0]);
  }

  onSelectedFromItem(){
      console.log("in item");
      
      this.recepieServ.recepieSelected.emit(this.recepieItem);
  }

}
