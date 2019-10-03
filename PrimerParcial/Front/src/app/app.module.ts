import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MiHttpService } from './servicios/mi-http/mi-http.service';
import { productosService } from './servicios/mascotas.service';
import { ListadoproductosComponent } from './componentes/listado-mascotas/listado-mascotas.component';
import { BorrarproductoComponent } from './componentes/borrar-mascota/borrar-mascota.component';
import { BusquedaproductoComponent } from './componentes/busqueda-mascota/busqueda-mascota.component';
import { MostrarproductoComponent } from './componentes/mostrar-mascota/mostrar-mascota.component';

//CAMBIAR POR LA NUEVA DIRECTIVA
import { PerroGatoDirective } from './directivas/perro-gato.directive'; 


@NgModule({
  declarations: [
    AppComponent,
    ListadoproductosComponent,
    BorrarproductoComponent,
    BusquedaproductoComponent,
    MostrarproductoComponent,
    PerroGatoDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [MiHttpService, productosService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
