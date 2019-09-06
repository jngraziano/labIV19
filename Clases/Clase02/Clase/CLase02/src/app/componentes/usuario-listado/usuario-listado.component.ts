import { Component, OnInit, Input } from '@angular/core';
import { UsuarioComponent } from "../usuario/usuario.component";
import { ListadoDeUsuariosComponent } from "../../listado-de-usuarios/listado-de-usuarios.component";

@Component({
  selector: 'app-usuario-listado',
  templateUrl: './usuario-listado.component.html',
  styleUrls: ['./usuario-listado.component.scss']
})
export class UsuarioListadoComponent implements OnInit {

  listaUsuarios:Array<any> = new Array<any>();
  datoUsuario: any;
  // @Input 

  constructor() {
    
   }

  ngOnInit() {
  }

  // hacerAlgo($event){
  //   console.info($event);
  //   this.datoUsuario=$event;
  //   this.listaUsuarios.push($event);
  //   // this.datos = ;

  // }
}
