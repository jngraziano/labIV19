import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../clase/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  

  constructor() {

    this.usuario = new Usuario;
  
   }

  ngOnInit() {
  }

  logeo(){
    if(this.usuario.nombre == "pepe" && this.usuario.clave == "1234")
    {
      alert("Usuario correcto. Bievenidos");

    }
    else{
      alert("usuario erroneo");
    }
  }


}
