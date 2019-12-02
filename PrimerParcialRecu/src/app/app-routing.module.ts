import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ListadoDeUsuariosComponent } from "../app/listado-de-usuarios/listado-de-usuarios.component";
import { UsuarioComponent } from "../app/componentes/usuario/usuario.component";
import { LoginComponent } from "../app/componentes/login/login.component";
import { UsuarioListadoComponent } from "../app/componentes/usuario-listado/usuario-listado.component";
import { ComponentepruebaComponent } from "../app/componentes/componenteprueba/componenteprueba.component";
import { ActoraltaComponent } from "../app/componentes/actoralta/actoralta.component";
import { ListadoDeActoresComponent } from "../app/componentes/listado-de-actores/listado-de-actores.component";
import { BienvenidoComponent } from "../app/componentes/bienvenido/bienvenido.component";
import { AltaPeliculasComponent } from "../app/componentes/alta-peliculas/alta-peliculas.component";
import { PaginaBusquedaComponent } from "../app/componentes/pagina-busqueda/pagina-busqueda.component";

import { ValidarutaService } from "../app/services/validaruta.service";

const routes: Routes = [

{ path: 'listadousuarios',
  component: ListadoDeUsuariosComponent,
  data: {animation: 'homeusuario'}
},

{ path: 'bienvenido',
  component: BienvenidoComponent,
  data: {animation: 'homeusuario'}
},

{ path: 'busqueda',
  component: PaginaBusquedaComponent,
  data: {animation: 'homeusuario'}
},
{ path: 'componenteprueba',
  component: ComponentepruebaComponent
},
{ path: 'peliculas',
  // component: UsuarioComponent,
  children:[
    {path: 'alta', component: AltaPeliculasComponent, canActivate: [ValidarutaService], data: {animation: 'homeusuario'}},
    {path:'listado', component:UsuarioComponent, data: {animation: 'homeusuario'}}
   
  ],
  data: {animation: 'homeusuario'}
},
{ path: 'actor',
  // component: UsuarioComponent,
  children:[
    {path: 'alta', component: ActoraltaComponent, canActivate: [ValidarutaService], data: {animation: 'homeusuario'}},
    {path:'listado', component:ListadoDeActoresComponent, data: {animation: 'homeusuario'}}
   
  ],

},


{ path: 'login',
  component: LoginComponent,
  data: {animation: 'homelogin'}
},
{ path: 'usuariolistado',
  component: UsuarioListadoComponent,
  data: {animation: 'homeusuario'}
},




{ path: '', 
  redirectTo: '/bienvenido', 
  pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
