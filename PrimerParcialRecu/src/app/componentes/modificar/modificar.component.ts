import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";


import { Actor } from 'src/app/clases/actor';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {

  @Input() actorEditar : Actor;
  @Output() lanzador=new EventEmitter();
  muestroform: boolean = false;
  selectedFile: ImageSnippet;
  imagenNueva: any;
  actorENBASE: any;

  constructor(private baseService: FirebaseService) { }

  ngOnInit() {
  }

  AbroForm(){
    this.muestroform = true;

    this.baseService.getItems("appTest/Actores").then(actores => {

      let listadoPeliculas = actores;
      this.actorENBASE = listadoPeliculas.find(elem => (elem.nombre == this.actorEditar.nombre));
    
      }); 
  }

  processFile(imageInput){

    this.imagenNueva = imageInput;
 
  }

  agregarUsuario(){
    
    const actor = new Actor();
    this.agregarImagen();
    actor.nombre = this.actorEditar.nombre;
    actor.apellido = this.actorEditar.apellido;
    actor.nacionalidad = this.actorEditar.nacionalidad;
    actor.fechaN = this.actorEditar.fechaN;
    actor.imgFoto = localStorage.getItem("ImagenPelicula");
    

    this.baseService.updateItem('appTest/Actores',this.actorENBASE.key, actor); 
    this.lanzador.emit();
    // actorCargar.fotoPelicula = localStorage.getItem("ImagenPelicula");
    
  
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
