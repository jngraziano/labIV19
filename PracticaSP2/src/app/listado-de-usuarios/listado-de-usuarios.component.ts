import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from "../clases/usuario";
import { FirebaseService } from "../services/firebase.service";
import { Materia } from "../clases/materia";



// import { UsuarioComponent } from "../componentes/usuario/usuario.component";
// import { UsuarioListadoComponent } from "../componentes/usuario-listado/usuario-listado.component";
@Component({
  selector: 'app-listado-de-usuarios',
  templateUrl: './listado-de-usuarios.component.html',
  styleUrls: ['./listado-de-usuarios.component.scss']
})

// @Directive({
//   selector: '[app-listado-de-usuarios]'
// })
export class ListadoDeUsuariosComponent implements OnInit {

 @Input() listadoMaterias: Array<Materia> = Array<Materia>();
 @Input() listadoMateriasNoInscripto: Array<Materia> = Array<Materia>();
 @Input() cantidadcupos:number;

 listausuarios: Usuario[];

 inscripto:boolean = false;
 materiasInscriptas:boolean = true;
 usuarioLogueado: any;

//  @Output() editarUsuario: EventEmitter<any> = new EventEmitter<any>();
//  @Output() borrarUsuario: EventEmitter<any> = new EventEmitter<any>();


  constructor(private baseService:FirebaseService) { 

  
  
  }

  ngOnInit() {
    this.traerDataTable();
  }

  async traerDataTable(){
    await this.baseService.getItems('appTest/materias').then(async mat => {
      this.listadoMaterias   = mat;
    
      this.traerInscripciones();
    });  
    
  }

  async traerInscripciones(){
    await this.baseService.getItems('appTest/Usuarios').then(async us => {
      this.listausuarios   = us;


      let usuarioLogueado :any = JSON.parse(sessionStorage.getItem("Usuarios"));
      
      let usuarioenBase = this.listausuarios.find(elem => (elem.email == usuarioLogueado.email));
   
      if (usuarioenBase !== undefined) {
     
        if(usuarioenBase.inscriptoBD == false)
        {
          for (let index = 0; index < this.listadoMaterias.length; index++) {
            if (this.listadoMaterias[index].nombre == "BD") {
              this.listadoMateriasNoInscripto.push(this.listadoMaterias[index]);
              delete this.listadoMaterias[index];
              this.listadoMaterias.splice(index,1);


            }
          }
        }
        if(usuarioenBase.inscriptoLABO4 == false)
        {
          for (let index = 0; index < this.listadoMaterias.length; index++) {
            if (this.listadoMaterias[index].nombre == "labo4") {
              this.listadoMateriasNoInscripto.push(this.listadoMaterias[index]);

              delete this.listadoMaterias[index];
              this.listadoMaterias.splice(index,1);


            
            }
          }

        }
        if(usuarioenBase.inscriptoMS1 == false)
        {
          for (let index = 0; index < this.listadoMaterias.length; index++) {
            if (this.listadoMaterias[index].nombre == "MS1") {
              this.listadoMateriasNoInscripto.push(this.listadoMaterias[index]);
              
              delete this.listadoMaterias[index];
              this.listadoMaterias.splice(index,1);

            
            }
          }

        }
      }

    });  
  }
  // editar(usuario: Usuario){
  //   this.editarUsuario.emit(usuario);
  // }

  async inscripccion(materia:Materia){
    console.log(materia.nombre);

    await this.baseService.getItems('appTest/Usuarios').then(async us => {
      
     let listadousuarios = us;
      let usuarioLogueado :any = JSON.parse(sessionStorage.getItem("Usuarios"));
      let usuarioenBase = listadousuarios.find(elem => (elem.email == usuarioLogueado.email));
      let alumnoPorEnviar: any;
      switch (materia.nombre) {
        case "labo4":
             alumnoPorEnviar= {
              email: usuarioenBase.email,
              clave: usuarioenBase.clave,
              perfil:usuarioenBase.perfil,
              nombre:usuarioenBase.nombre,
              inscriptoBD: usuarioenBase.inscriptoBD,
              inscriptoMS1: usuarioenBase.inscriptoMS1,
              inscriptoLABO4: true,
            }
          
          break;

          case "MS1":
              alumnoPorEnviar = {
                email: usuarioenBase.email,
                clave: usuarioenBase.clave,
                perfil:usuarioenBase.perfil,
                nombre:usuarioenBase.nombre,
                inscriptoBD: usuarioenBase.inscriptoBD,
                inscriptoMS1: true,
                inscriptoLABO4: usuarioenBase.inscriptoLABO4,
              }
          
          break;

          case "BD":
               alumnoPorEnviar= {
                email: usuarioenBase.email,
                clave: usuarioenBase.clave,
                perfil:usuarioenBase.perfil,
                nombre:usuarioenBase.nombre,
                inscriptoBD: true,
                inscriptoMS1: usuarioenBase.inscriptoMS1,
                inscriptoLABO4: usuarioenBase.inscriptoLABO4,
              }
          
          break;
      
        default:
          break;
      }
     
      
      this.baseService.updateItem('appTest/Usuarios',usuarioenBase.key,alumnoPorEnviar); 
      location.reload();

    });  
  }

  // borrar(usuario:Usuario){
  //   this.borrarUsuario.emit(usuario);
  // }

  mostrarParaInscribir(){
    if(this.materiasInscriptas)
    {
      this.materiasInscriptas = false;
    }
    else{
      this.materiasInscriptas = true;
    }
  }
}
