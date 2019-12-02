import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-modificar',
  templateUrl: './producto-modificar.component.html',
  styleUrls: ['./producto-modificar.component.css']
})
export class ProductoModificarComponent implements OnInit {

  public producto: Producto = new Producto();
  public descError: boolean;
  public tipoError: boolean;
  public fechaDeVencError: boolean;
  public precioError: boolean;

  constructor(private productoServ: ProductosService,
              private traerParametros: ActivatedRoute,
              private miRouter: Router) {
    this.traerParametros.queryParams.subscribe(params => {
      this.producto.id = params.id;
      this.producto.descripcion = params.descripcion;
      this.producto.tipo = params.tipo;
      this.producto.fechaDeVencimiento = params.fechaDeVencimiento;
      this.producto.precio = params.precio;
      this.producto.rutaDeFoto = params.rutaDeFoto;
  });
              }

  ngOnInit() {
    // this.ReestablecerTodo();
  }

  ReestablecerTodo() {
    this.producto = new Producto();
    this.descError = false;
    this.tipoError = false;
    this.fechaDeVencError = false;
    this.precioError = false;
  }

  Modificar() {
    if (this.ValidarCampos() != false) {
      this.producto.rutaDeFoto = '../../../assets/imagenes/default.png';
      this.productoServ.ModificarUno(this.producto)
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
