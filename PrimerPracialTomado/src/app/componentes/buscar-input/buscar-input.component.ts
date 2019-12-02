import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-buscar-input',
  templateUrl: './buscar-input.component.html',
  styleUrls: ['./buscar-input.component.css']
})
export class BuscarInputComponent implements OnInit {

    @Output() resultadoBuscar: EventEmitter<Producto[]> = new EventEmitter<Producto[]>();
    public modelo: string;
    private productos: Array<Producto>;
    private errorMsj;

  constructor(private productoServ: ProductosService) { }

  ngOnInit() {
  }



  public BuscarClicked() {
    // if (this.modelo == undefined) {
    //   return false;
    // }

    this.productoServ.TraerTodos()
    .subscribe(
      // tslint:disable-next-line: triple-equals
      data => {this.productos = data.filter(producto => producto.descripcion.toUpperCase() == this.modelo.toUpperCase());
               console.log(data);
      // error => this.errorMsj = error;
               if (this.productos.length < 1) {
        alert('No se encontraron resultados');
      } else {
        this.resultadoBuscar.emit(this.productos);
      }
    });
  }

}
