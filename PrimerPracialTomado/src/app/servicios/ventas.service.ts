import { Injectable } from '@angular/core';
import { MiservicioPrincipalService } from './miservicioPrincipal/miservicio-principal.service';
import { Venta } from '../clases/venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private httpClient: MiservicioPrincipalService<Venta>) { }

  public TraerTodos() {
    return this.httpClient.HttpGetAll('ventas/listar/');
  }

  public CrearUna(venta: Venta) {
    return this.httpClient.PostHttp('ventas/alta/', venta);
  }
}
