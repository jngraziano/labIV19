import { Directive,ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[letraYcolor]'
})
export class LetraYcolorDirective {

  constructor(private element : ElementRef, private renderer : Renderer) { }

  ngOnInit(): void {

    this.renderer.setElementStyle( this.element.nativeElement, 'color', 'blanchedalmond');
    this.renderer.setElementStyle( this.element.nativeElement, 'text-shadow', '1px 0 black, 0 1px black, 1px 0 black, 0 -1px black');

    this.renderer.setElementStyle( this.element.nativeElement, 'font-family', "Skranji, cursive");
  
  
  }

}
