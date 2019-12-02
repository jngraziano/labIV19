import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-alta',
  templateUrl: './producto-alta.component.html',
  styleUrls: ['./producto-alta.component.css']
})
export class ProductoAltaComponent implements OnInit {

  public producto: Producto;
  public descError: boolean;
  public tipoError: boolean;
  public fechaDeVencError: boolean;
  public precioError: boolean;

  constructor(private productoServ: ProductosService, private miRouter: Router) { }

  ngOnInit() {
    this.ReestablecerTodo();
  }

  ReestablecerTodo() {
    this.producto = new Producto();
    this.descError = false;
    this.tipoError = false;
    this.fechaDeVencError = false;
    this.precioError = false;
  }

  Agregar() {
    if (this.ValidarCampos() != false) {
      this.producto.rutaDeFoto = '../../../assets/imagenes/default.png';
      console.log(this.producto);
      this.productoServ.CrearUno(this.producto)
      .subscribe();
      // alert('Se agregó el producto correctamente!');
      this.ReestablecerTodo();
    }
  }

 ValidarCampos() {
    let result = true;

    if (this.producto.descripcion == '' || this.producto.descripcion == undefined) {
      this.descError = true;
      result = false;
    }
    if (this.producto.tipo == 'null' || this.producto.tipo == undefined) {
      this.tipoError = true;
      result = false;
    }
    if (this.producto.fechaDeVencimiento == null || this.producto.fechaDeVencimiento == undefined) {
      this.fechaDeVencError = true;
      result = false;
    }
    if (this.producto.precio == null || this.producto.precio == undefined) {
      this.precioError = true;
      result = false;
    }
    return result;
  }

  VolverAProductosClick(): void {
    this.miRouter.navigate(['/productos']);
  }


}
