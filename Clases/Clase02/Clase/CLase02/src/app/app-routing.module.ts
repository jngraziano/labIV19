import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoDeUsuariosComponent } from "../app/listado-de-usuarios/listado-de-usuarios.component";
import { UsuarioComponent } from "../app/componentes/usuario/usuario.component";


const routes: Routes = [
//   { path: 'firstpage',
//   component: FirstpageComponent
// },
{ path: 'listadousuarios',
  component: ListadoDeUsuariosComponent
},
{ path: 'usuario',
  component: UsuarioComponent
},
{ path: '', 
  redirectTo: '/usuario', 
  pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
