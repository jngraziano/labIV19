import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MihttpService {

  constructor(public http: Http) { }


  public httpGetP ( url: string)
  {
    return this.http
    .get( url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .post(url,objeto )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  public httpGetO ( url: string): Observable<any>
  {
    return this.http.get( url )
      // .map( ( res: Response ) => res.json())
      // .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
      .pipe(res => res);
  }

  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}
