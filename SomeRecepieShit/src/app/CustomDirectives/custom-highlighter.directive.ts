import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive ({
    selector: '[customHighlighter]'
})
export class CustomHighlighter implements OnInit{

  constructor(private element: ElementRef)
  {} 

ngOnInit(){
this.element.nativeElement.style.backgroundColor = 'green';
}

}