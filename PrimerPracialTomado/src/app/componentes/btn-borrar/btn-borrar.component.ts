import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-btn-borrar',
  templateUrl: './btn-borrar.component.html',
  styleUrls: ['./btn-borrar.component.css']
})
export class BtnBorrarComponent implements OnInit {

  @Input() idProducto: number;
  @Output() borrado: EventEmitter<number> = new EventEmitter<number>();

  constructor( private productoServ: ProductosService ) {}

  private Borrar() {
    this.productoServ.BorrarUno(this.idProducto)
    .subscribe( () => {
      this.borrado.emit(this.idProducto);
    });
  }

  ngOnInit() {
  }

}
