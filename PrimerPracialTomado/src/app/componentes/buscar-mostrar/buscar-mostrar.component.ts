import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-buscar-mostrar',
  templateUrl: './buscar-mostrar.component.html',
  styleUrls: ['./buscar-mostrar.component.css']
})
export class BuscarMostrarComponent implements OnInit {

  public productosFiltrados: Array<Producto>;

  constructor() { }

  ngOnInit() {
  }

  CargarProductos(productosBusqueda: Array<Producto>) {
    this.productosFiltrados = productosBusqueda;
  }

}
