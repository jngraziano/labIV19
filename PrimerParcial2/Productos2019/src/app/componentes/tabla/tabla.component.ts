import { Component,  OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Producto } from "../../clases/producto";
import { MihttpService } from "../../servicios/mihttp.service";

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  @Input() listadoProductos: Array<Producto> = Array<Producto>();
  @Output() editarProducto: EventEmitter<any> = new EventEmitter<any>();
  @Output() borrarProducto: EventEmitter<any> = new EventEmitter<any>();
  lista: any;
  token: string;
  prod1:Producto;
  prod2:Producto;
  prod3:Producto;


  constructor(public mihttp:MihttpService) {
    this.prod1 = new Producto();
    this.prod2 = new Producto();
    this.prod3 = new Producto();

    this.traerDatosBD();
   }

  ngOnInit() {
  }

  traerDatosBD(){

    // this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Njk1NDQyMTgsImV4cCI6MTU2OTU1NDIxOCwiYXVkIjoiMjhmMWI1YjlkMjliMWM1Yjk3NzdkNzdhOWQ4ZDE1YzkyM2Q3ZjNmMiIsImRhdGEiOnsidXN1YXJpbyI6InJyYW5kbGVzb24wIiwicGVyZmlsIjoiYWRtaW4iLCJpZEVtcGxlYWRvIjoyLCJzZWN0b3IiOiJzaXN0ZW1hcyIsImVzdGFkbyI6ImFjdGl2byIsImlkU2VzaW9uIjoiMCJ9LCJhcHAiOiJBUEkgUkVTVCBFTVBMRUFET1MgMjAxOSJ9.h0ZKYsRZXYwgYoGGd55Vpmer3QFno_O12hHASvssXAo";
    // this.lista = this.mihttp.httpPostP("http://localhost:8080/apiProducto/Empleados/ListaEmpleados",this.token);

    // for (let index = 0; index < this.lista.length; index++) {
    //   this.listadoProductos.push(this.lista[index]);
      
    // }
    this.listadoProductos.push(this.prod1,this.prod2,this.prod3)
    
  

  }

  editar(producto: Producto){
    this.editarProducto.emit(producto);
  }

  borrar(producto:Producto){
    this.editarProducto.emit(producto);
  }

}
