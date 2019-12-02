import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pagina-busqueda',
  templateUrl: './pagina-busqueda.component.html',
  styleUrls: ['./pagina-busqueda.component.scss']
})
export class PaginaBusquedaComponent implements OnInit {

  peliculaBusqueda: string;
  peliculaNoExiste: boolean = false;
  textopeliculaNoExiste: string; 
  peliculaExiste = [];


  constructor() { }

  ngOnInit() {
  }


  mostrarBusqueda(peliculaBuscada){
    console.log(peliculaBuscada);
    // this.isLoading = true;
    if(peliculaBuscada.nombre == undefined)
    {
      this.textopeliculaNoExiste = peliculaBuscada;
      this.peliculaExiste = [];
      this.peliculaNoExiste = true;
    }
    else{
      this.peliculaNoExiste = false;
      this.peliculaExiste.push(peliculaBuscada);


      // this.peliculaExiste.nombre = peliculaBuscada.nombre;
      // this.peliculaExiste.tipo = peliculaBuscada.tipo;
      // this.peliculaExiste.fechaEstreno = peliculaBuscada.fechaEstreno;
      // this.peliculaExiste.cantPublic = peliculaBuscada.cantPublic;
      // this.peliculaExiste.fotoPelicula = peliculaBuscada.fotoPelicula;

    }

    // this.isLoading = false;
    this.peliculaBusqueda = "";
  }

}
