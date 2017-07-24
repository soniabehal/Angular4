import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[Betteronebro]'
})
export class BetteronebroDirective implements OnInit{

@Input() class1: string = 'transparent'
@Input() class2: string = 'blue'

  constructor(private renderer: Renderer2, private ele: ElementRef) { }
@HostBinding ('class') cilehas: string;

  ngOnInit(){
    this.cilehas = this.class2;
  }

  @HostListener('mouseenter') onHover(eventData: Event){
// this.renderer.setStyle(this.ele.nativeElement,'background-color','#333');
// this.renderer.setStyle(this.ele.nativeElement,'color','#fff');
this.cilehas = this.class1;
  }
@HostListener('mouseleave') onHoverExit(eventData: Event){
// this.renderer.setStyle(this.ele.nativeElement,'background-color','#fff');
// this.renderer.setStyle(this.ele.nativeElement,'color','#333');
this.cilehas = this.class2;
  }
}
