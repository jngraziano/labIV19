import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { productosService } from '../../servicios/mascotas.service';

import { producto } from '../../clases/producto';

@Component({
  selector: 'app-busqueda-mascota',
  templateUrl: './busqueda-mascota.component.html',
  styleUrls: ['./busqueda-mascota.component.css']
})
export class BusquedaproductoComponent implements OnInit {

	@Output() enviarDato: EventEmitter<any> = new EventEmitter<any>(); //evento (delegado)

	productos:Array<producto>;
	miServicioDeproductos:productosService;
	descripcion: string;

  constructor( servicioproductos:productosService ) { 

  	this.productos = new Array<producto>();
  	this.miServicioDeproductos = servicioproductos;

  }

  ngOnInit() {

  	this.productos = new Array<producto>();
  }

  buscar() {
    
    this.miServicioDeproductos.traerUnoPordescripcion(this.descripcion)
    .then(datos=>{

      this.productos = datos;
      console.log(this.productos);
      this.enviarDato.emit( this.productos )

    });

  }

}
