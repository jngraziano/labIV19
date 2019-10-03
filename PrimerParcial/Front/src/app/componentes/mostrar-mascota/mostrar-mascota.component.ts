import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { productosService } from '../../servicios/mascotas.service';

import { producto } from '../../clases/producto';

@Component({
  selector: 'app-mostrar-mascota',
  templateUrl: './mostrar-mascota.component.html',
  styleUrls: ['./mostrar-mascota.component.css']
})
export class MostrarproductoComponent implements OnInit {

	@Input() productos:Array<producto>;
  
  constructor() { 

  	this.productos = new Array<producto>();

  }

  ngOnInit() {

  }

}
