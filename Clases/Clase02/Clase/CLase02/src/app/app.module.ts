import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoDeUsuariosComponent } from './listado-de-usuarios/listado-de-usuarios.component';
import { FormsModule } from "@angular/forms";
import { UsuarioComponent } from './componentes/usuario/usuario.component';

import { FirebaseService } from "../app/services/firebase.service";
import { ComponentepruebaComponent } from './componentes/componenteprueba/componenteprueba.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuarioListadoComponent } from './componentes/usuario-listado/usuario-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoDeUsuariosComponent,
    UsuarioComponent,
    ComponentepruebaComponent,
    LoginComponent,
    UsuarioListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
