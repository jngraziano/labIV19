import { Directive,ElementRef, Renderer } from '@angular/core';


@Directive({
  selector: '[BotonesSombraRed]'
})
export class BotonesSombraRedDirective {

  constructor(private element : ElementRef, private renderer : Renderer) { }

  ngOnInit(): void {

    this.renderer.setElementStyle( this.element.nativeElement, 'color', 'blanchedalmond');
    this.renderer.setElementStyle( this.element.nativeElement, 'text-shadow', '1px 0 black, 0 1px black, 1px 0 black, 0 -1px black');
    
   
    // color: black;
    // transition-duration: 1.8s;
    // box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);

    // this.renderer.setElementStyle( this.element.nativeElement, 'hover', 'color: crimson');

    // this.renderer.setElementStyle( this.element.nativeElement, 'font-family', "Skranji, cursive");
  

  }

}
