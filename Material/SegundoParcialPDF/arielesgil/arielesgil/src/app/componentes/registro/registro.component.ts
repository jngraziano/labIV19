import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario } from '../../clases/usuario';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
  listadoUsuarios
  usuarios;
  unUsuario: Usuario;

  constructor( private builder: FormBuilder , private auth : AuthService, private db: AngularFirestore, private router : Router) {

    this.unUsuario = new Usuario();
    

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

  nombre = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(15)
  ]);

  tipo = new FormControl('', [
    Validators.required
  ]);

  registroForm: FormGroup = this.builder.group({
    email: this.email,
    clave: this.clave,
    tipo: this.tipo,
    nombre: this.nombre
  })

  ngOnInit() {
    
  }

  validarUsuario()
  {
    this.listadoUsuarios= this.db.collection<any>('usuarios').ref.where("email", "==", this.unUsuario.email); 
    if(this.listadoUsuarios)
      return true;
    else 
      return false;
  }
  


  enviar()
  {
    console.log(this.unUsuario);
    let tipo = this.unUsuario.tipo;
    let router:Router
    if(this.validarUsuario())
    {
    this.auth.registerUser(this.unUsuario.email,this.unUsuario.clave)
    .then((unUsuario) => {
      console.log("Alta exitosa");
      console.log(this.unUsuario);
      sessionStorage.setItem('email', this.unUsuario.email);
      sessionStorage.setItem('tipo', this.unUsuario.tipo);
      
      this.db.collection("usuarios").doc(this.unUsuario.email).set({

        email: this.unUsuario.email,
        clave: this.unUsuario.clave,
        tipo: this.unUsuario.tipo,
        nombre: this.unUsuario.nombre
  
      })
      .then(function(docRef) {
        console.log("Se guarda el usuario en base ");
    })
    .catch(function(error) {
        alert("Error al registrarse, realizarlo nuevamente")
        console.error("Error al escribir el usuario", error);
    });
  
    switch(tipo){
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
    
    })
    .catch(err=>{
     console.log("Usuario ya creado");
    });

    
}
  else
  {
    alert("El usuario ya se encuentra creado");
  }
  }



  

}
