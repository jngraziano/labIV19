import { Component, OnInit, Input, Output,AfterViewInit,ElementRef,EventEmitter } from '@angular/core';
import { Router } from "@angular/router";


import * as firebase from "firebase";
import { FirebaseService } from "../../services/firebase.service";
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actoralta',
  templateUrl: './actoralta.component.html',
  styleUrls: ['./actoralta.component.scss']
})
export class ActoraltaComponent implements OnInit {

  public actor : Actor = new Actor();
 

  constructor(private baseService: FirebaseService,
    private elementRef: ElementRef,
    private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'darkgrey';
 }




  agregarUsuario(){
    // this.seCreo.emit(this.usuario);
    // this.baseService.addItem('appTest/Usuarios', this.usuario);
   
    const actor = new Actor();
    // this.agregarImagen();
    actor.nombre = this.actor.nombre;
    actor.apellido = this.actor.apellido;
    actor.nacionalidad = this.actor.nacionalidad;
    actor.fechaN = this.actor.fechaN;
   

    this.baseService.addItem('appTest/Actores', actor); 

    this.actor = new Actor();
    this.router.navigateByUrl('/actor/listado'); 


 
  }


}
