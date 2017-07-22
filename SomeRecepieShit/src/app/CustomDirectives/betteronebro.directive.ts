import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[Betteronebro]'
})
export class BetteronebroDirective implements OnInit{

  constructor(private renderer: Renderer2, private ele: ElementRef) { }
@HostBinding ('class') cilehas: string;

  ngOnInit(){
  }

  @HostListener('mouseenter') onHover(eventData: Event){
// this.renderer.setStyle(this.ele.nativeElement,'background-color','#333');
// this.renderer.setStyle(this.ele.nativeElement,'color','#fff');
this.cilehas = 'blue';
  }
@HostListener('mouseleave') onHoverExit(eventData: Event){
// this.renderer.setStyle(this.ele.nativeElement,'background-color','#fff');
// this.renderer.setStyle(this.ele.nativeElement,'color','#333');
this.cilehas = 'transparent';
  }
}
