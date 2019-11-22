import { Component, OnInit, Input,Output } from '@angular/core';
import { Usuario } from "../../clases/usuario";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nombre:string;
  IngresoBool:boolean = false;
  usuario : Usuario = new Usuario();
  perfilUsuario: string;

  constructor(private router: Router) { }

  ngOnInit() {

    if(sessionStorage.getItem('Usuarios') == null )
    {
    //  console.log("no hay usuario");
      this.IngresoBool=false;
      this.nombre='';
    }
    else 
    {
      this.usuario = JSON.parse(sessionStorage.getItem('Usuarios')) ;
      this.nombre =this.usuario.email;
      this.IngresoBool=true;
      this.perfilUsuario = JSON.parse(sessionStorage.getItem('Usuarios')).perfil;
    }
  }

  logout()
  {
    sessionStorage.removeItem("Usuario");
    sessionStorage.clear();
    this.IngresoBool=false;
    this.router.navigateByUrl('/login');
    
  }

 

}
