import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { Venta } from 'src/app/clases/venta';

@Component({
  selector: 'app-grilla-ventas',
  templateUrl: './grilla-ventas.component.html',
  styleUrls: ['./grilla-ventas.component.css']
})
export class GrillaVentasComponent implements OnInit {

  @Input() listadoProductos: Array<Producto> = Array<Producto>();
  @Input() listadoVentas: Array<Venta> = Array<Venta>();

  constructor() { }

  ngOnInit() {
  }

}
