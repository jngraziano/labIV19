import { Component, OnInit, Input, Output,AfterViewInit,ElementRef,EventEmitter } from '@angular/core';
import { Producto } from "../../clases/producto";

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {

  public producto : Producto = new Producto();
  public productoEditar : Producto = new Producto();

  public muestroTabla : boolean = true;

  public loginBOX : boolean = false;

  public modificar: boolean = false;

  public listadoProductos: Array<Producto> = Array<Producto>();


  constructor( private elementRef: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'darkgrey';
 }

  MuestroTabla(){
    this.modificar = false;
    this.muestroTabla = true;
    this.loginBOX = false;
  }

  CancelarEditar() {
    // this.usuario.email = this.usuarioEditar.email;
    // this.usuario.clave = this.usuarioEditar.clave;
    // this.usuario = new Usuario();
    this.muestroTabla = true;

    this.loginBOX = false;
   
    // this.usuario.email = "";
    // this.usuario.clave = "";

  }

  MuestroLoginBOX(){
    this.modificar = false;
    this.muestroTabla = true;
    this.loginBOX = true;
  }

}
