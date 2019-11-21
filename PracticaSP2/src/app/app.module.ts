import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoDeUsuariosComponent } from './listado-de-usuarios/listado-de-usuarios.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsuarioComponent } from './componentes/usuario/usuario.component';

import { FirebaseService } from "../app/services/firebase.service";
import { ComponentepruebaComponent } from './componentes/componenteprueba/componenteprueba.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuarioListadoComponent } from './componentes/usuario-listado/usuario-listado.component';
import { MihttpService } from './services/mihttp.service'; 
import { Response , Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/header/header.component';
import { TemadarkDirective } from './directivas/temadark.directive';




@NgModule({
  declarations: [
    AppComponent,
    ListadoDeUsuariosComponent,
    UsuarioComponent,
    ComponentepruebaComponent,
    LoginComponent,
    UsuarioListadoComponent,
    HeaderComponent,
    TemadarkDirective,
  
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    MihttpService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
