import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appClassAdder]'
})
export class ClassAdderDirective {

@Input() 
classToBeAdded: string;

@HostBinding('class')
 class: string;

@HostListener('click') clicked(){
if(this.class != this.classToBeAdded)
  {this.class = this.classToBeAdded}
else 
  {this.class=""}
}

  constructor() { }

}
