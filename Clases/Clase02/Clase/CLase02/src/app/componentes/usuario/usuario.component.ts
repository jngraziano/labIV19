import { Component, OnInit, Input, Output,AfterViewInit,ElementRef } from '@angular/core';
import { Usuario } from "../../clases/usuario";
import { ListadoDeUsuariosComponent } from "../../listado-de-usuarios/listado-de-usuarios.component";


import * as firebase from "firebase";
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit,AfterViewInit {

  
  public usuario : Usuario = new Usuario();

  public muestroTabla : boolean = true;

  public loginBOX : boolean = false;


  public listaUsuarios: Array<Usuario> = Array<Usuario>();

  public vista: string = 'grilla';


  constructor(private baseService: FirebaseService,
    private elementRef: ElementRef) {

    // this.usuario = new Usuario();
    // this.UsuarioGuardar = new Usuario();
    // this.ListadoUs.listaUsuarios = [];
    
   }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'darkgrey';
 }
  MuestroLoginBOX(){
    this.muestroTabla = false;
    this.loginBOX = true;
  }

  CreoUsuario(){
 
    // console.log(this.loginBOX);
    const usuario = new Usuario();
    usuario.email = this.usuario.email;
    usuario.clave = this.usuario.clave;
    this.listaUsuarios.push(usuario);

    this.baseService.addItem('appTest/Usuarios', this.usuario);
    this.loginBOX = false;
    this.muestroTabla = true;
  }


  MuestroTabla(){
    this.muestroTabla = true;
    this.loginBOX = false;
  }


}
