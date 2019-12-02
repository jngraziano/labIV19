import { Component, OnInit, Input, Output,AfterViewInit,ElementRef,EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

import { Actor } from "../../clases/actor";


import * as firebase from "firebase";
import { FirebaseService } from "../../services/firebase.service";
import { Pelicula } from 'src/app/clases/pelicula';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-alta-peliculas',
  templateUrl: './alta-peliculas.component.html',
  styleUrls: ['./alta-peliculas.component.scss']
})
export class AltaPeliculasComponent implements OnInit {

  public pelicula : Pelicula = new Pelicula();
  public peliculaEditar : Pelicula = new Pelicula();
  public listadoActores: Array<Actor> = Array<Actor>();


  selectedFile: ImageSnippet;
  imagenNueva: any;
  checkagregoimagen: boolean = false;
  agregoimagenErrorMsg: boolean = false;

  listaActores = []
 



  constructor(private baseService: FirebaseService,
    private elementRef: ElementRef,
    private router: Router) {

      this.cargarActores();
    
   }

  ngOnInit() {

    this.cargarActores();
   
  }
  cargarActores() {
    
    this.baseService.getItems("appTest/Actores").then(actores => {
      
      
      let listadoActores = actores;

      listadoActores.forEach(element => {
        this.listadoActores.push(element);
      });
      console.log(this.listadoActores);
    });
    
  }
 
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'darkgrey';
 }




  agregarUsuario(){
    // this.seCreo.emit(this.usuario);
    // this.baseService.addItem('appTest/Usuarios', this.usuario);
   
    const pelicula = new Pelicula();
    this.agregarImagen();
    pelicula.nombre = this.pelicula.nombre;
    pelicula.tipo = this.pelicula.tipo;
    pelicula.fechaEstreno = this.pelicula.fechaEstreno;
    pelicula.cantPublic = this.pelicula.cantPublic;
    pelicula.fotoPelicula = localStorage.getItem("ImagenPelicula");



    // pelicula.fotoPelicula = this.pelicula.fotoPelicula;

    

    // this.listadoPeliculas.push(pelicula);
    this.baseService.addItem('appTest/Peliculas', pelicula); 

    this.pelicula = new Pelicula();
    localStorage.setItem("ImagenPelicula","");
    this.router.navigateByUrl('/peliculas/listado'); 


 
  }



  processFile(imageInput){

    this.imagenNueva = imageInput;
 
  }


  agregarImagen()
  {
    // let storageRef = firebase.storage().ref();
    // let errores: number = 0;
    // let usuarioLogueado: any = JSON.parse(sessionStorage.getItem('Usuarios'));
    // let filename: string = this.pelicula.nombre;
    const file: File = this.imagenNueva.files[0];
    const reader = new FileReader();
    // const imageRef = storageRef.child(`comanda/usuarios/${filename}.jpg`);
    let enviarFotoB64;

    reader.onloadend = function() {
      enviarFotoB64= reader.result;
      localStorage.setItem("ImagenPelicula",enviarFotoB64);
      
      // imageRef.putString(enviarFotoB64, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
       
      // })
      //   .catch(() => {
      //     errores++;
      //   });
    }
    
    reader.readAsDataURL(file);
  }


}
