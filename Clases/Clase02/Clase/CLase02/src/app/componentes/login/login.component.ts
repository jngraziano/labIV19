import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Usuario } from "../../clases/usuario";
import { Router } from "@angular/router";
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarios: Usuario[];
  public usuario : Usuario = new Usuario();
  public error: boolean = false;
  public success: boolean = false;


  // cuenta: { usuario: string, password: string } = {
  //   usuario: '',
  //   password: ''
  // };

  constructor(private baseService: FirebaseService,
              private router: Router) { }

  ngOnInit() {
  }

  login(){
    // this.spinner = true; 
    this.baseService.getItems("appTest/Usuarios").then(users => {
      // setTimeout(() => this.spinner = false, 2000);
     
      // console.log(this.usuarios);
      // console.log(users);

      this.usuarios = users;

      let usuarioLogueado = this.usuarios.find(elem => (elem.email == this.usuario.email && elem.clave == this.usuario.clave));
      console.log(usuarioLogueado);
      // console.log(usuarioLogueado);
      // console.log(this.cuenta);
      if (usuarioLogueado !== undefined) {
        this.error = false;
        this.success = true;
        sessionStorage.setItem('Usuarios', JSON.stringify(usuarioLogueado));

        // this.events.publish('usuarioLogueado', usuarioLogueado.perfil);       
        // this.creoToast(true);
        
        this.router.navigateByUrl('/usuario'); 
      }
      else{
        this.error = true;
      }
    });
  }

}
