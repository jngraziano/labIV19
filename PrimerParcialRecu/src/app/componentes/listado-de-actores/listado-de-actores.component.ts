import { Component, OnInit, Input, Output,AfterViewInit,ElementRef,EventEmitter } from '@angular/core';

import * as firebase from "firebase";
import { FirebaseService } from "../../services/firebase.service";
import { Actor } from 'src/app/clases/actor';


@Component({
  selector: 'app-listado-de-actores',
  templateUrl: './listado-de-actores.component.html',
  styleUrls: ['./listado-de-actores.component.scss']
})
export class ListadoDeActoresComponent implements OnInit {

  public actor : Actor = new Actor();

  public listadoActores: Array<Actor> = Array<Actor>();

  isLoading: boolean = false;

  constructor(private baseService: FirebaseService,
    private elementRef: ElementRef) { }

  ngOnInit() {
    this.traerActores();
  }
  traerActores() {
    this.isLoading = true;
    this.baseService.getItems("appTest/Actores").then(actores => {
      
      
      this.listadoActores = actores;

      this.isLoading = false;
    });
    
  }

  borrar(actor) {
    // const index = this.listadoPeliculas.indexOf(actor);
    // this.listadoPeliculas.splice(index, 1);

    this.baseService.getItems("appTest/Actores").then(actores => {
      let listaActores = actores;
      let actorAborrar = listaActores.find(elem => (elem.nombre == actor.nombre));
      this.baseService.removeItem('appTest/Actores', actorAborrar.key );



    }); 

    this.actor = new Actor();
    this.traerActores();

  }

}
