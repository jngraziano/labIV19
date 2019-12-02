import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { Venta } from 'src/app/clases/venta';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { VentasService } from 'src/app/servicios/ventas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  
  public productos: Array<Producto>;
  public ventas: Array<Venta>;
  
  constructor(private productoServ: ProductosService,
    private ventaServ: VentasService, 
    private miRouter: Router) { }
    
    ngOnInit() {
      this.productoServ.TraerTodos()
      .subscribe(
        data => {this.productos = data;
          // tslint:disable-next-line: no-console
          console.info(data);
        });
        
        this.ventaServ.TraerTodos()
        .subscribe(
          data => {this.ventas = data;
            // tslint:disable-next-line: no-console
            console.info(data);
            
          });
        }
        
        
        AgregarVentaClick(): void {
          this.miRouter.navigate(['/ventas/alta']);
        }
        
      }
      