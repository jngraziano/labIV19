import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoProductosComponent } from './componentes/listado-productos/listado-productos.component';
import { TablaComponent } from './componentes/tabla/tabla.component';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MihttpService } from './servicios/mihttp.service'; 
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ListadoProductosComponent,
    TablaComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
