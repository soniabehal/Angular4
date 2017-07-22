import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../recepie.model'

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

  constructor() { }

  ngOnInit() {

  }

  addNewItem(){
    var newRec:Recepie = 
    new Recepie(
      this.NewName.nativeElement.value,
      this.NewDesc.nativeElement.value,
      this.NewImg.nativeElement.value
    );

    this.newRecepieToBeAdded.emit(newRec);

  }
}
