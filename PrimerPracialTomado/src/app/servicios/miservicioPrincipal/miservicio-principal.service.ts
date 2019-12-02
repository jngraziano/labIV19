import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Producto } from 'src/app/clases/producto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json '
  })
};
  
@Injectable({
  providedIn: 'root'
})
export class MiservicioPrincipalService<T> {

  private urlBase:string = 'http://localhost/parcial/';

  constructor( public http: HttpClient ) {}

  public HttpGetAll(metodo: string): Observable<any[]> { // Observable<T[]>
    return this.http.get<T[]>( this.urlBase + metodo )
    .pipe( res => res );
  }


  public DeleteHttp(url: string, id: number) {
    // console.log(this.urlBase + url + id);
    return this.http.delete(this.urlBase + url + id)
    .pipe( res => res );
    // .toPromise().catch(this.ErrorHandler);
  }

  public PostHttp(url: string, object: T) {
    console.log(this.urlBase + url);
    console.log(object);
    return this.http.post<T>(this.urlBase + url, object, httpOptions)
     .pipe( res => res );
  }

  public PutHttp(url: string, object: T) {
    console.log(this.urlBase + url);
    console.log(object);
    return this.http.put<T>(this.urlBase + url + object, httpOptions);
    // .toPromise().catch(this.ErrorHandler);
  }



}
