import { Component, OnInit, Input, Output,AfterViewInit,ElementRef,EventEmitter } from '@angular/core';
import { Usuario } from "../../clases/usuario";


import * as firebase from "firebase";
import { FirebaseService } from "../../services/firebase.service";


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit,AfterViewInit {

  
  public usuario : Usuario = new Usuario();
  public usuarioEditar : Usuario = new Usuario();

  public muestroTabla : boolean = true;

  public loginBOX : boolean = false;

  public modificar: boolean = false;

  public listadoUsuarios: Array<Usuario> = Array<Usuario>();

  // public vista: string = 'grilla';
  // @Output () seCreo:EventEmitter<any> = new EventEmitter();

  constructor(private baseService: FirebaseService,
    private elementRef: ElementRef) {


    
   }

  ngOnInit() {
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
    const usuario = new Usuario();
    usuario.email = this.usuario.email;
    usuario.clave = this.usuario.clave;
    this.listadoUsuarios.push(usuario);
    this.usuario = new Usuario();
    this.loginBOX = false;
    this.muestroTabla = true;
  }

  GuardarEditar() {
    this.usuario = new Usuario();
    this.loginBOX = false;
  }

  CancelarEditar() {
    this.usuario.email = this.usuarioEditar.email;
    this.usuario.clave = this.usuarioEditar.clave;
    this.usuario = new Usuario();
    this.muestroTabla = true;

    this.loginBOX = false;
   
    this.usuario.email = "";
    this.usuario.clave = "";

  }


  EditarUsuario(usuario) {
    this.loginBOX = true;
    this.modificar = true;
    this.usuarioEditar = new Usuario();
    this.usuarioEditar.email = usuario.email;
    this.usuarioEditar.clave = usuario.clave;
    this.usuario = usuario;
    
  }

  BorrarUsuario(usuario) {
    const index = this.listadoUsuarios.indexOf(usuario);
    this.listadoUsuarios.splice(index, 1);
    this.usuario = new Usuario();
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


}
