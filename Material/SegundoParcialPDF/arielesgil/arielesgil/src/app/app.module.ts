import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {environment} from '../environments/environment';
import { AuthService } from '../app/servicios/auth.service';
import {FirebaseStorageService} from '../app/servicios/firebase-storage.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdminPageComponent } from './componentes/admin-page/admin-page.component';
import { ProferorPageComponent } from './componentes/proferor-page/proferor-page.component';
import { AlumnoPageComponent } from './componentes/alumno-page/alumno-page.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { HeaderMailComponent } from './componentes/header-mail/header-mail.component';
import { AltaMateriaComponent } from './componentes/alta-materia/alta-materia.component';
import { ListaMateriasComponent } from './componentes/lista-materias/lista-materias.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { InscripcionMateriaComponent } from './componentes/inscripcion-materia/inscripcion-materia.component';
import { ListadoMateriasAlumnoComponent } from './componentes/listado-materias-alumno/listado-materias-alumno.component';
import { MateriasProfeComponent } from './componentes/materias-profe/materias-profe.component';
import { AlumnosProfeComponent } from './componentes/alumnos-profe/alumnos-profe.component';
import { ChatComponent } from './componentes/chat/chat.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    AdminPageComponent,
    ProferorPageComponent,
    AlumnoPageComponent,
    PrincipalComponent,
    HeaderMailComponent,
    AltaMateriaComponent,
    ListaMateriasComponent,
    ListaUsuariosComponent,
    InscripcionMateriaComponent,
    ListadoMateriasAlumnoComponent,
    MateriasProfeComponent,
    AlumnosProfeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    JwtModule
  ],
  providers: [AuthService, AngularFirestore, JwtHelperService, FirebaseStorageService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
