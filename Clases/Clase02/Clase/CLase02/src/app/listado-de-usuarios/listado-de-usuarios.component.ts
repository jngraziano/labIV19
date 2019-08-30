import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from "../clases/usuario";
import { FirebaseService } from "../services/firebase.service";
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

  constructor(private baseService:FirebaseService) { 

    this.traerDataTable();
  }

  ngOnInit() {
  }

  async traerDataTable(){
    await this.baseService.getItems('appTest/Usuarios').then(async ped => {
      this.listaUsuarios   = ped;
    });  
  }

}
