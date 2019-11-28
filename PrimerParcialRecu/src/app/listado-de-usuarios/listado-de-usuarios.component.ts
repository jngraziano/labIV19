import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from "../clases/usuario";
import { Pelicula } from "../clases/pelicula";

import { FirebaseService } from "../services/firebase.service";
// import { UsuarioComponent } from "../componentes/usuario/usuario.component";
// import { UsuarioListadoComponent } from "../componentes/usuario-listado/usuario-listado.component";
@Component({
  selector: 'app-listado-de-usuarios',
  templateUrl: './listado-de-usuarios.component.html',
  styleUrls: ['./listado-de-usuarios.component.scss']
})

// @Directive({
//   selector: '[app-listado-de-usuarios]'
// })
export class ListadoDeUsuariosComponent implements OnInit {

 @Input() listadoPeliculas: Array<Pelicula> = Array<Pelicula>();
 @Output() editarUsuario: EventEmitter<any> = new EventEmitter<any>();
 @Output() borrarUsuario: EventEmitter<any> = new EventEmitter<any>();


  constructor(private baseService:FirebaseService) { 

    // this.traerDataTable();
  }

  ngOnInit() {
  }

  async traerDataTable(){
    // await this.baseService.getItems('appTest/Usuarios').then(async ped => {
    //   this.listaUsuarios   = ped;
    // });  
    
    // this.listaUsuarios
  }

  editar(peli: Pelicula){
    this.editarUsuario.emit(peli);
  }

  borrar(peli: Pelicula){
    this.borrarUsuario.emit(peli);
  }

}
