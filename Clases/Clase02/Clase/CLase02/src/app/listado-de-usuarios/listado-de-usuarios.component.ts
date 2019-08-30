import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from "../clases/usuario";
// import { UsuarioComponent } from "../componentes/usuario/usuario.component";
@Component({
  selector: 'app-listado-de-usuarios',
  templateUrl: './listado-de-usuarios.component.html',
  styleUrls: ['./listado-de-usuarios.component.scss']
})

// @Directive({
//   selector: '[app-listado-de-usuarios]'
// })
export class ListadoDeUsuariosComponent implements OnInit {

 @Input() listaUsuarios: Array<Usuario> = Array<Usuario>();

  constructor() { 
  }

  ngOnInit() {
  }

}
