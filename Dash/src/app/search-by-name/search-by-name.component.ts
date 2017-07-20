import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer'

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css'],
  encapsulation:ViewEncapsulation.Native
})
export class SearchByNameComponent implements OnInit {


    protected dataService: CompleterData;
  protected searchData = [
    "Bella", "Bob", "Brutus","Hero","John","Harish","James","Jordan","Ana","Angular"
  ];

  constructor(private compService: CompleterService) { }

  ngOnInit() {
  }

}
