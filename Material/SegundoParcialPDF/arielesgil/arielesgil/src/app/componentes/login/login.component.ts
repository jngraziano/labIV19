import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Usuario } from '../../clases/usuario';
import { AuthService } from '../../servicios/auth.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  unUsuario:  Usuario;
  todosLosUsuarios : Usuario[];
  dbUsuarios: Observable<any[]>;
  constructor(private builder: FormBuilder, private auth : AuthService, private router : Router, private db: AngularFirestore) { 
    this.unUsuario = new Usuario();

    this.dbUsuarios = this.db.collection('usuarios').valueChanges();
    this.todosLosUsuarios = new Array();
    this.ObtenerUsuarios();
  }

  ngOnInit() {
  }

  
  email = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.email
    
  ]);

  clave = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(15)
  ]);

 
  registroForm: FormGroup = this.builder.group({
    email: this.email,
    clave: this.clave
  })


  login()
{
  let perfil = this.ObtenerPerfil(this.unUsuario.email);
    this.auth.loginUser(this.unUsuario.email,this.unUsuario.clave ).then((user) => {
      console.log("Ingreso Exitoso"); 
      sessionStorage.setItem("tipo", perfil);
      sessionStorage.setItem("email", this.unUsuario.email);
      switch(perfil){
        case "administrador": 
          this.router.navigate(['admin']);
          break;
          case "alumno": 
          this.router.navigate(['alumno']);
          break;
          case "profesor": 
          this.router.navigate(['profesor']);
          break;
        default:
            this.router.navigate(['Login']);
            break;
      }

      }
    )
     .catch(err=>{
      alert("Error al loguearse, realizarlo nuevamente");
      console.log("Error al loguearse", err);
      window.location.reload();
    })
  }

  ObtenerUsuarios(){
    this.dbUsuarios.forEach(element => {

      //console.info(element);

      element.forEach(usuario => {

        let unUsr = new Usuario();

        unUsr.email = usuario.email;
        unUsr.tipo = usuario.tipo;

        this.todosLosUsuarios.push(unUsr);
        
      });
      
    });
  }

  ObtenerPerfil(correo:string):string{    

    let elPerfil:string = '';

    this.todosLosUsuarios.forEach(element => {

      if(correo == element.email){

        console.log(element.tipo);        
        elPerfil = element.tipo;

      }
      
    });

    return elPerfil;
  }

}
