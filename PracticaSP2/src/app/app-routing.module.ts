import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { ListadoDeUsuariosComponent } from "../app/listado-de-usuarios/listado-de-usuarios.component";
import { UsuarioComponent } from "../app/componentes/usuario/usuario.component";
import { LoginComponent } from "../app/componentes/login/login.component";
import { UsuarioListadoComponent } from "../app/componentes/usuario-listado/usuario-listado.component";
import { ComponentepruebaComponent } from "../app/componentes/componenteprueba/componenteprueba.component";
import { ProfesorComponent } from "../app/componentes/profesor/profesor.component";
import { AdminComponent } from "../app/componentes/admin/admin.component";

import { ValidarRutaServiceService } from './services/validar-ruta-service.service';


const routes: Routes = [

{ path: 'listadousuarios',
  component: ListadoDeUsuariosComponent
},
{ path: 'componenteprueba',
  component: ComponentepruebaComponent
},
{ path: 'usuario',
  component: UsuarioComponent, canActivate: [ValidarRutaServiceService],
  data: {animation: 'homeusuario'}
},
{ path: 'profesor',
  component: ProfesorComponent, canActivate: [ValidarRutaServiceService],
  data: {animation: 'homeusuario'}
},
{ path: 'admin',
  component: AdminComponent, canActivate: [ValidarRutaServiceService],
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
