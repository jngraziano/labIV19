import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { productosService } from '../../servicios/mascotas.service';

import { producto } from '../../clases/producto';

@Component({
  selector: 'app-borrar-mascota',
  templateUrl: './borrar-mascota.component.html',
  styleUrls: ['./borrar-mascota.component.css']
})
export class BorrarproductoComponent implements OnInit {

	@Input() id:string;
  miServicioDeproductos:productosService;

  constructor( servicioproductos:productosService ) { 

    this.miServicioDeproductos = servicioproductos;

  }

  ngOnInit() {
  }

   borrarUno(){

      var datos = "id=" + this.id;
      
      this.miServicioDeproductos.borrar(datos, 'application/x-www-form-urlencoded')
      .then( response => {

        if( response.hasOwnProperty('Estado') && response.Estado === "Error"){

          alert("Se rompio todo");

        } else {

          alert("producto dada de baja con exito!");

          this.traerproductos();

        }

      });

  }

  traerproductos(){

    location.reload();

  }

}
