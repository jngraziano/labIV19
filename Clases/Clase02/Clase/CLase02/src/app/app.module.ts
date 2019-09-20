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
import { MihttpService } from './services/mihttp.service'; 
import { Response , Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    ListadoDeUsuariosComponent,
    UsuarioComponent,
    ComponentepruebaComponent,
    LoginComponent,
    UsuarioListadoComponent,
  
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MihttpService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
