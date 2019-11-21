import { Directive, ElementRef, Renderer, Input } from '@angular/core';


@Directive({
  selector: '[loscupos]'
})
export class LoscuposDirective {
  @Input() cantidadcupos: number; 

  constructor(private element : ElementRef, private renderer : Renderer) { }

  ngOnInit()
  {

    if (this.cantidadcupos > 10) {
      this.renderer.setElementStyle( this.element.nativeElement, "color", "green");
      
    }
    if (this.cantidadcupos > 20) {
      this.renderer.setElementStyle( this.element.nativeElement, "color", "violet");

    }
    if (this.cantidadcupos == 0) {
      this.renderer.setElementStyle( this.element.nativeElement, "color", "red");

    }
    
  }

}
