import { Component } from '@angular/core';

import { producto } from "./clases/producto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica primer parcial';
  tipo = 'gato'

  productos:Array<producto>;

  constructor() { 

    this.productos = new Array<producto>();

  }

  ngOnInit() {

  }

	mostrar($event){

  		this.productos = $event;
	
	}

}
