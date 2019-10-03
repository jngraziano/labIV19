import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { productosService } from '../../servicios/mascotas.service';

import { producto } from '../../clases/producto';

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})
export class ListadoproductosComponent implements OnInit {

  //@Output() enviarDato: EventEmitter<any> = new EventEmitter<any>(); //evento (delegado)
  producto:producto;

  public listadoDeproductos: Array<producto>;
  miServicioDeproductos:productosService;

  constructor( servicioproductos:productosService ) {

    this.miServicioDeproductos = servicioproductos;
    this.producto = new producto();

   }

  ngOnInit() {

    this.traerproductos();

    this.producto = new producto();

  }

  mostrarForm($event){

    if($event.srcElement.checked){
      document.getElementById("formAlta").style.visibility = 'visible';
    } else {
      document.getElementById("formAlta").style.visibility = 'hidden';
    }

  }

  guardar(){
    /*
    let faltanDatos:boolean = false;

    if(this.producto.descripcion === undefined){
      document.getElementById("descripcionproducto").style.borderColor = 'red';
      faltanDatos = true;
    }

    if(this.producto.sexo === undefined){
      document.getElementById("sexoproducto").style.borderColor = 'red';
      faltanDatos = true;
    }

    if(this.producto.fechaDeNacimiento === undefined){
      document.getElementById("fechaDeNacimiento").style.borderColor = 'red';
      faltanDatos = true;
    }

    if(!faltanDatos){
    */
    var datos = "descripcion=" + this.producto.descripcion + 
          "&tipo=" + this.producto.tipo + 
          "&precio=" + this.producto.precio + 
          "&fechavencimiento=" + this.producto.fechavencimiento;
    console.log(datos);
    this.miServicioDeproductos.nuevo(datos, 'application/x-www-form-urlencoded')
    .then( response => {

      console.log(response);

      if( response.hasOwnProperty('Estado') && response.Estado === "Error"){

        alert("Se rompio todo");

      } else {

        alert("Producto dado de alta con exito!");
        this.producto = new producto();

        this.traerproductos();

      }

      });

    //}

  }
  /*
  borrarUno(id){

      var datos = "id=" + id;
      
      this.miServicioDeproductos.borrar(datos, 'application/x-www-form-urlencoded')
      .then( response => {

        if( response.hasOwnProperty('Estado') && response.Estado === "Error"){

          alert("Se rompio todo");

        } else {

          alert("Usuario dado de baja con exito!");

          this.traerproductos();

        }

      });

  }
  */
  traerproductos(){

    this.miServicioDeproductos.listar()
    .then(datos=>{
      this.listadoDeproductos = datos;
    });

  }

  /*enviar(producto){

    this.enviarDato.emit( producto );

  }*/

}
