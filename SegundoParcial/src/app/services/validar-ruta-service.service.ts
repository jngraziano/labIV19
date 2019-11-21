import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';




@Injectable({
  providedIn: 'root'
})
export class ValidarRutaServiceService {

  constructor(private router: Router, private baseService: FirebaseService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {

    
    let url: string = state.url;
    console.log('url dentro de canActivate', url);
    console.log(route);
    console.log("estado ", state);

    let usuarioLogueado = sessionStorage.getItem('Usuarios');
    console.log(usuarioLogueado);
    if ( usuarioLogueado !== null)
    {
      return true;
    }
    else
    {
      this.router.navigateByUrl('/login'); 
      return false;
    }
}
}
