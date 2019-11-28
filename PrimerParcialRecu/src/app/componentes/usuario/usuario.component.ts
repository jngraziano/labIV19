import { Component, OnInit, Input, Output,AfterViewInit,ElementRef,EventEmitter } from '@angular/core';
import { Usuario } from "../../clases/usuario";


import * as firebase from "firebase";
import { FirebaseService } from "../../services/firebase.service";
import { Pelicula } from 'src/app/clases/pelicula';
import { isString } from 'util';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit,AfterViewInit {

  
  public pelicula : Pelicula = new Pelicula();
  public peliculaEditar : Pelicula = new Pelicula();

  public muestroTabla : boolean = true;

  public loginBOX : boolean = false;

  public modificar: boolean = false;

  public listadoPeliculas: Array<Pelicula> = Array<Pelicula>();

  selectedFile: ImageSnippet;
  imagenNueva: any;
  checkagregoimagen: boolean = false;
  agregoimagenErrorMsg: boolean = false;
  peliculaNoExiste: boolean = false;
  textopeliculaNoExiste: string; 
  peliculaBusqueda: string;
  isLoading: boolean = false;


  // peliculaExiste = {
  //   nombre: "",
  //   tipo: "",
  //   fotoPelicula: "",
  //   fechaEstreno: "",
  //   cantPublic: 0
  // }

  peliculaExiste = [];

  // public vista: string = 'grilla';
  // @Output () seCreo:EventEmitter<any> = new EventEmitter();

  constructor(private baseService: FirebaseService,
    private elementRef: ElementRef) {


    
   }

  ngOnInit() {

    this.traerTabla();
  }
  traerTabla() {
    this.isLoading = true;
    this.baseService.getItems("appTest/Peliculas").then(peliculas => {
      
      
      this.listadoPeliculas = peliculas;

      this.isLoading = false;

      
    
    });
    

  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'darkgrey';
 }
  MuestroLoginBOX(){
    this.modificar = false;
    this.muestroTabla = true;
    this.loginBOX = true;
  }

  // CreoUsuario(){

  //   const usuario = new Usuario();
  //   usuario.email = this.usuario.email;
  //   usuario.clave = this.usuario.clave;
  //   this.listadoUsuarios  .push(usuario);
  //   this.usuario = new Usuario();

  //   this.loginBOX = false;
  //   this.muestroTabla = true;
  // }

  agregarUsuario(){
    // this.seCreo.emit(this.usuario);
    // this.baseService.addItem('appTest/Usuarios', this.usuario);
    this.modificar = false;
    const pelicula = new Pelicula();
    this.agregarImagen();
    pelicula.nombre = this.pelicula.nombre;
    pelicula.tipo = this.pelicula.tipo;
    pelicula.fechaEstreno = this.pelicula.fechaEstreno;
    pelicula.cantPublic = this.pelicula.cantPublic;
    pelicula.fotoPelicula = localStorage.getItem("ImagenPelicula");



    // pelicula.fotoPelicula = this.pelicula.fotoPelicula;

    

    this.listadoPeliculas.push(pelicula);
    this.baseService.addItem('appTest/Peliculas', pelicula); 

    this.pelicula = new Pelicula();
    localStorage.setItem("ImagenPelicula","");

    this.loginBOX = false;
    this.muestroTabla = true;
  }

  GuardarEditar(pelicula) {
    this.pelicula = new Pelicula();
    console.log(pelicula);
    this.peliculaEditar.nombre = pelicula.nombre;
    this.peliculaEditar.tipo = pelicula.tipo;
    this.peliculaEditar.fechaEstreno = pelicula.fechaEstreno;
    this.peliculaEditar.cantPublic = pelicula.cantPublic;
    this.peliculaEditar.fotoPelicula = pelicula.fotoPelicula;

    this.baseService.updateItem('appTest/Peliculas', pelicula.key, this.peliculaEditar); 
    this.peliculaEditar = new Pelicula();
    localStorage.setItem("ImagenPelicula","");
    this.traerTabla();
    this.loginBOX = false;
  }

  CancelarEditar() {
    this.pelicula.nombre = this.peliculaEditar.nombre;
    this.pelicula.tipo = this.peliculaEditar.tipo;
    this.pelicula.fechaEstreno = this.peliculaEditar.fechaEstreno;
    this.pelicula.cantPublic = this.peliculaEditar.cantPublic;

    this.pelicula = new Pelicula();
    this.muestroTabla = true;

    this.loginBOX = false;
   
    // this.usuario.email = "";
    // this.usuario.clave = "";

  }


  EditarUsuario(pelicula) {
    this.loginBOX = true;
    this.modificar = true;
    // this.peliculaEditar = new Pelicula();

 
    this.pelicula.nombre = pelicula.nombre;
    this.pelicula.tipo = pelicula.tipo;
    this.pelicula.fechaEstreno = pelicula.fechaEstreno;
    this.pelicula.cantPublic = pelicula.cantPublic;
    this.pelicula.fotoPelicula = pelicula.fotoPelicula;
    console.log(this.pelicula);
    // this.listadoPeliculas.push(this.peliculaEditar);
    
    
  }

  BorrarUsuario(pelicula) {
    const index = this.listadoPeliculas.indexOf(pelicula);
    this.listadoPeliculas.splice(index, 1);

    this.baseService.getItems("appTest/Peliculas").then(peliculas => {
      let listaPelis = peliculas;
      let peliculAborrar = listaPelis.find(elem => (elem.nombre == pelicula.nombre));
      this.baseService.removeItem('appTest/Peliculas', peliculAborrar.key );



    }); 

    this.pelicula = new Pelicula();
    this.traerTabla();

  }
 


  MuestroTabla(){
    this.modificar = false;
    this.muestroTabla = true;
    this.loginBOX = false;
  }

  LimpioBase(){
    this.baseService.getItems('appTest/Usuarios').then(cargas => {
      // let usuarioLogueado: any = JSON.parse(sessionStorage.getItem('Usuarios'));

      for (let i = 0; i < cargas.length; i++) {
      
          this.baseService.removeItem('appTest'+'/Usuarios', cargas[i].key );
        
        
      }
      // this.creoToastBorro();

      window.location.reload();
      // this.levantarCreditoDB();
      });
  }

  processFile(imageInput){

    this.imagenNueva = imageInput;
    this.checkagregoimagen = true; 
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




  mostrarBusqueda(peliculaBuscada){
    console.log(peliculaBuscada);
    this.isLoading = true;
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

    this.isLoading = false;
    this.peliculaBusqueda = "";
  }


}
