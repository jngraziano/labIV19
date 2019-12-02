import { Injectable } from '@angular/core';
import { MiservicioPrincipalService } from '../miservicioPrincipal/miservicio-principal.service';
import { Producto } from 'src/app/clases/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient: MiservicioPrincipalService<Producto>) {}

  //  public TraerUno(id: number): {
  //   return this.httpClient.GetHttp('actores/', id);
  // }

  public TraerTodos() {
    return this.httpClient.HttpGetAll('producto/listar/');
  }

  public CrearUno(prod: Producto) {
    return this.httpClient.PostHttp('producto/alta/', prod);
  }

  public ModificarUno(prod: Producto) {
    return this.httpClient.PostHttp('producto/modificar', prod);
  }

  public BorrarUno(id: number) {
    return this.httpClient.DeleteHttp('producto/', id);
  }
}

