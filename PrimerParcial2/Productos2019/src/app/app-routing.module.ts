import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoProductosComponent } from "./componentes/listado-productos/listado-productos.component";
import { TablaComponent } from "./componentes/tabla/tabla.component";


const routes: Routes = [
  
{ path: 'listadoproductos',
component: ListadoProductosComponent
 },
{ path: 'tabla',
component: TablaComponent
},
// { path: 'usuario',
// component: UsuarioComponent,
// data: {animation: 'homeusuario'}
// },
// { path: 'login',
// component: LoginComponent,
// data: {animation: 'homelogin'}
// },
// { path: 'usuariolistado',
// component: UsuarioListadoComponent
// },
{ path: '', 
redirectTo: '/listadoproductos', 
pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
