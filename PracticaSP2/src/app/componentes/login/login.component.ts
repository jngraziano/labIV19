import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  loginForm: FormGroup;
  usuarios: Usuario[];
  public usuario : Usuario = new Usuario();
  public error: boolean = false;
  public success: boolean = false;
  // spinner:boolean;
  captchaOK: boolean = false;
  captchaE: boolean = false;

  datacallback: string;
  respuesta: any;
  datosLogin: Usuario;

  // loading = false;
  // submitted = false;
  // returnUrl: string;
  // public dataRespuesta:any;
  // hide: any;
  // @Input () type: any;


  isLoading: boolean = false;

  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;


  // cuenta: { usuario: string, password: string } = {
  //   usuario: '',
  //   password: ''
  // };

      constructor(  private formBuilder: FormBuilder,
                    private baseService: FirebaseService,
                    private router: Router) { }

  ngOnInit() {
    this.addRecaptchaScript();

    this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        clave: ['', Validators.required]
    });

  }

  get datosForm() { return this.loginForm.controls; }


  login(){
    this.isLoading = true; 

    this.baseService.getItems("appTest/Usuarios").then(users => {
      // setTimeout(() => this.spinner = false, 4000);
     
   
      this.usuarios = users;
      console.log(this.datosForm);
      let usuarioLogueado = this.usuarios.find(elem => (elem.email == this.datosForm.email.value && elem.clave == this.datosForm.clave.value));
      console.log(usuarioLogueado);
    
      if (usuarioLogueado !== undefined) {
        sessionStorage.setItem('Usuarios', JSON.stringify(usuarioLogueado));
        console.log("Captcha esta ok?" + this.captchaOK);
        this.captchaE = false;
        if (this.captchaOK) {
          this.isLoading = false;
          this.captchaE = false;
          this.error = false;
          this.success = true;

        switch(usuarioLogueado.perfil){
          case "administrador": 
            this.router.navigate(['admin']);
            break;
            case "alumno": 
            this.router.navigateByUrl('/usuario'); 
            break;
            case "profesor": 
            this.router.navigate(['profesor']);
            break;
          default:
              this.router.navigate(['Login']);
              break;
        }


        }
        else{
          this.isLoading = false;
          this.captchaE = true;
        }
         
       
      }
      else{
        this.isLoading = false;
        this.captchaE = false;

        this.error = true;

      }
    });
  }


  LoginAlumno()
{
    this.loginForm.controls['email'].setValue('alumno@gmail.com');
    this.loginForm.controls['clave'].setValue('1234');
}

LoginProfesor()
{
    this.loginForm.controls['email'].setValue('profesor@gmail.com');
    this.loginForm.controls['clave'].setValue('1234');
}

LoginAdmin()
{
  this.loginForm.controls['email'].setValue('admin@gmail.com');
  this.loginForm.controls['clave'].setValue('1234');
}

// LoginTragos()
// {
//   this.loginForm.controls['username'].setValue('barra1@gmail.com');
//   this.loginForm.controls['clave'].setValue('1234');
// }


// LoginChopera()
// {
//   this.loginForm.controls['username'].setValue('chopera1@gmail.com');
//   this.loginForm.controls['clave'].setValue('1234');
// }

// LoginCocina()
// {
//   this.loginForm.controls['username'].setValue('cocina1@gmail.com');
//   this.loginForm.controls['clave'].setValue('1234');
// }

// LoginCandy()
// {
//   this.loginForm.controls['username'].setValue('candy1@gmail.com');
//   this.loginForm.controls['clave'].setValue('1234');
// }




renderReCaptch() {
  window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
    'sitekey' : '6LcNY78UAAAAANCSxOs6q84fn-fdu3x5fzSzmZWD',
    'callback': (response) => {
      this.captchaOK = true;
        // console.log(response);
        console.log(this.captchaOK);
    }
  });
}

addRecaptchaScript() {

  window['grecaptchaCallback'] = () => {
    this.renderReCaptch();
  }

  (function(d, s, id, obj){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { obj.renderReCaptch(); return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'recaptcha-jssdk', this));

}

}
