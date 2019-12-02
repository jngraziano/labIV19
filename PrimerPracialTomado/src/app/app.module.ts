import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { BtnBorrarComponent } from './componentes/btn-borrar/btn-borrar.component';
import { BuscarInputComponent } from './componentes/buscar-input/buscar-input.component';
import { BuscarMostrarComponent } from './componentes/buscar-mostrar/buscar-mostrar.component';
import { ProductoAltaComponent } from './componentes/producto-alta/producto-alta.component';
import { ProductoModificarComponent } from './componentes/producto-modificar/producto-modificar.component';
import { VentaAltaComponent } from './componentes/venta-alta/venta-alta.component';
import { VentaComponent } from './componentes/venta/venta.component';
import { GrillaVentasComponent } from './componentes/grilla-ventas/grilla-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    GrillaComponent,
    BtnBorrarComponent,
    BuscarInputComponent,
    BuscarMostrarComponent,
    ProductoAltaComponent,
    ProductoModificarComponent,
    VentaAltaComponent,
    VentaComponent,
    GrillaVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
