import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { Venta } from 'src/app/clases/venta';
import { VentasService } from 'src/app/servicios/ventas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venta-alta',
  templateUrl: './venta-alta.component.html',
  styleUrls: ['./venta-alta.component.css']
})
export class VentaAltaComponent implements OnInit {
  
  public productos: Array<Producto>;
  public producto: Producto;
  public venta: Venta;
  public descError: boolean;
  public tipoError: boolean;
  public fechaDeVencError: boolean;
  public precioError: boolean;
  
  constructor(private productoServ: ProductosService, private ventaService: VentasService,private miRouter: Router) { }
  
  ngOnInit() {
    this.productoServ.TraerTodos()
    .subscribe(
      data => {this.productos = data;
        // tslint:disable-next-line: no-console
        console.info(data);
      });
      this.venta = new Venta();
      this.producto = new Producto();
    }
    
    ReestablecerTodo() {
      this.producto = new Producto();
      this.descError = false;
      this.tipoError = false;
      this.fechaDeVencError = false;
      this.precioError = false;
    }
    
    AgregarVenta() {
        this.venta.idProducto = this.producto.id;
        this.ventaService.CrearUna(this.venta)
        .subscribe();
        // alert('Se agregó el producto correctamente!');
        this.ReestablecerTodo();
      
      console.log(this.venta);
    }
    
    
    ValidarCampos() {
      let result = true;
      
      if (this.producto.descripcion == '' || this.producto.descripcion == undefined) {
        this.descError = true;
        result = false;
      }
      if (this.venta.fechaDeVenta == null || this.venta.fechaDeVenta == undefined) {
        this.fechaDeVencError = true;
        result = false;
      } 
      if (this.venta.cantidad == null || this.venta.cantidad == undefined) {
        this.precioError = true;
        result = false;
      }
      return result;
    }
    
    VolverAVentasClick(): void {
      this.miRouter.navigate(['/ventas']);
    }
  }
  