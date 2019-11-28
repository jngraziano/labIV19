import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  @Input() peliculaBusqueda:number;

  @Output() lanzador=new EventEmitter();


  constructor(private baseService: FirebaseService) { }

  ngOnInit() {

  }


  BusquedaPelicula(){
    console.log(this.peliculaBusqueda);

    this.baseService.getItems("appTest/Peliculas").then(peliculas => {

      let listadoPeliculas = peliculas;
      let peliculaBuscada = listadoPeliculas.find(elem => (elem.nombre == this.peliculaBusqueda));
      if(peliculaBuscada != undefined)
      {
        this.lanzador.emit(peliculaBuscada);

      }
      else{
        let peliculaNOEncontrada = "No se pudo encontrar la pelicula."
        this.lanzador.emit(peliculaNOEncontrada);
      }
      
      }); 

  }

}
