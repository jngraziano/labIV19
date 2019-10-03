import { Directive, ElementRef, Input, HostListener, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appPerroGato]'
})
export class PerroGatoDirective {

	@Input() tipo: string;

    constructor(private el: ElementRef) {
       
    }

	ngOnChanges() {
	    if( this.tipo === "perro")
	    	this.el.nativeElement.style.backgroundColor = 'brown';
	    if( this.tipo === "gato")
	    	this.el.nativeElement.style.backgroundColor = 'yellow';
	}

}
