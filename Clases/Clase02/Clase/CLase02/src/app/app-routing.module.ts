import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoDeUsuariosComponent } from "../app/listado-de-usuarios/listado-de-usuarios.component";
import { UsuarioComponent } from "../app/componentes/usuario/usuario.component";
import { LoginComponent } from "../app/componentes/login/login.component";
import { UsuarioListadoComponent } from "../app/componentes/usuario-listado/usuario-listado.component";
import { ComponentepruebaComponent } from "../app/componentes/componenteprueba/componenteprueba.component";

const routes: Routes = [

{ path: 'listadousuarios',
  component: ListadoDeUsuariosComponent
},
{ path: 'componenteprueba',
  component: ComponentepruebaComponent
},
{ path: 'usuario',
  component: UsuarioComponent,
  data: {animation: 'homeusuario'}
},
{ path: 'login',
  component: LoginComponent,
  data: {animation: 'homelogin'}
},
{ path: 'usuariolistado',
  component: UsuarioListadoComponent
},
{ path: '', 
  redirectTo: '/login', 
  pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
