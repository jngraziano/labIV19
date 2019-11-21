import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ProferorPageComponent } from './componentes/proferor-page/proferor-page.component';
import { AlumnoPageComponent } from './componentes/alumno-page/alumno-page.component';
import { AdminPageComponent } from './componentes/admin-page/admin-page.component';
import { ValidarRutaService } from './servicios/validar-ruta.service';
import { AltaMateriaComponent } from './componentes/alta-materia/alta-materia.component';
import { ListaMateriasComponent } from './componentes/lista-materias/lista-materias.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { InscripcionMateriaComponent } from './componentes/inscripcion-materia/inscripcion-materia.component';
import { ListadoMateriasAlumnoComponent } from './componentes/listado-materias-alumno/listado-materias-alumno.component';
import { MateriasProfeComponent } from './componentes/materias-profe/materias-profe.component';
import { AlumnosProfeComponent } from './componentes/alumnos-profe/alumnos-profe.component';
import { ChatComponent } from './componentes/chat/chat.component';


const routes: Routes = [
  {path: '', component: PrincipalComponent},

  {path:'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'profesor', component: ProferorPageComponent, canActivate: [ValidarRutaService],
  children:[
    {path:'misMaterias', component:MateriasProfeComponent},
    {path:'misAlumnos', component:AlumnosProfeComponent},
    {path: 'chat', component: ChatComponent}
  ] },
  {path:'alumno', component: AlumnoPageComponent, canActivate: [ValidarRutaService],
  children:[
    {path:'inscripcion', component:InscripcionMateriaComponent},
    {path:'listaMaterias', component:ListadoMateriasAlumnoComponent},
    {path: 'chat', component: ChatComponent}
  ] 
  },
  {path: 'admin', component: AdminPageComponent, canActivate: [ValidarRutaService],
  children:[
    {path:'alta', component:AltaMateriaComponent},
    {path:'listaMaterias', component:ListaMateriasComponent},
    {path:'listaUsuarios', component:ListaUsuariosComponent},
    {path: 'chat', component: ChatComponent}
  ]  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
