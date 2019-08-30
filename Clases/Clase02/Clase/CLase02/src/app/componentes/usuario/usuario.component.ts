import { Component, OnInit, Input, Output, Directive } from '@angular/core';
import { Usuario } from "../../clases/usuario";
import { ListadoDeUsuariosComponent } from "../../listado-de-usuarios/listado-de-usuarios.component";


import * as firebase from "firebase";
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  
  public usuario : Usuario = new Usuario();
  
  // public UsuarioGuardar : Usuario;
  // public ListadoUs : ListadoDeUsuariosComponent;
  public muestroTabla : boolean = false;


  public listaUsuarios: Array<Usuario> = Array<Usuario>();

  public vista: string = 'grilla';


  constructor(private baseService: FirebaseService) {

    // this.usuario = new Usuario();
    // this.UsuarioGuardar = new Usuario();
    // this.ListadoUs.listaUsuarios = [];
    
   }

  ngOnInit() {
  }

  CreoUsuario(){
    const usuario = new Usuario();
    usuario.nombre = this.usuario.nombre;
    usuario.clave = this.usuario.clave;
    this.listaUsuarios.push(usuario);

    this.baseService.addItem('appTest/Usuarios', this.usuario);

    this.muestroTabla = true;
  }
  tablaFalse(){
    this.muestroTabla = false;
  }


}
