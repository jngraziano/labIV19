import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {


  @Input() listadoProductos: Array<Producto> = Array<Producto>();


  constructor(private miRouter: Router) { }

  ngOnInit() {
  }

  public RefrescarLista( idProducto: number ) {
    this.listadoProductos = this.listadoProductos.filter(item => item.id !== idProducto);
  }

  public IrAModificarClick(producto: Producto) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          id: producto.id,
          descripcion: producto.descripcion,
          tipo: producto.tipo,
          fechaDeVencimiento: producto.fechaDeVencimiento,
          precio: producto.precio,
          rutaDeFoto: producto.rutaDeFoto
      }
    };
    this.miRouter.navigate(['/productos/modificar'], navigationExtras);
  }


}
