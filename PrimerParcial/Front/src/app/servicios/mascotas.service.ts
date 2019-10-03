import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 

import { producto } from '../clases/producto'; 

@Injectable()
export class productosService { 

  constructor(public miHttp: MiHttpService ) { }

  public listar():Promise<Array<producto>> {
       return   this.miHttp.httpGetP("/productos")
          .then( data => {
            return data;
          })
          .catch( err => {
            return null;
          });
          //return null;
    }

      public traerUnoPordescripcion(descripcion):Promise<Array<producto>> {
       return   this.miHttp.httpGetP("/productos/"+descripcion)
          .then( data => {
            return data;
          })
          .catch( err => {
            return null;
          });
          //return null;
    }

  public nuevo(params, contentType):Promise<any> {
   return this.miHttp.httpPostData("/productos/alta", params, contentType)
      .then( data => {
        return data;
      })
      .catch( err => {
        console.log( err );
        return null;
      });
  }

    public borrar(params, contentType):Promise<any> {
   return this.miHttp.httpPostData("/productos/borrar", params, contentType)
      .then( data => {
        return data;
      })
      .catch( err => {
        console.log( err );
        return null;
      });
  }



}
