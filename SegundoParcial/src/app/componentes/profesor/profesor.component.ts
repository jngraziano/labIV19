import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Materia } from "../../clases/materia";
import { Usuario } from "../../clases/usuario";

import { FirebaseService } from "../../services/firebase.service";


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})
export class ProfesorComponent implements OnInit {

  @Input() listadoMaterias: Array<Materia> = Array<Materia>();
  @Input() listadoMateriasAcargo: Array<Materia> = Array<Materia>();
  listausuarios: Usuario[];
  listausuariosMostrar: Usuario[] = [];


  usuarioPorMateria:boolean = false;

  constructor(private baseService:FirebaseService) { }

  ngOnInit() {
    this.traerDataTable();

  }


  async traerDataTable(){
    await this.baseService.getItems('appTest/materias').then(async mat => {
      this.listadoMaterias   = mat;
    
      this.traerAcargo();
    });  
    
  }

  traerAcargo(){
    let usuarioRegistrado = JSON.parse(sessionStorage.getItem('Usuarios'));

    this.listadoMaterias.forEach(element => {

        if (element.nombreProfesor == usuarioRegistrado.nombre) {
            this.listadoMateriasAcargo.push(element);
        }

    });
  }

  async verAlumnos(materia:Materia){
    this.usuarioPorMateria = true;
    this.listausuariosMostrar = [];
    await this.baseService.getItems('appTest/Usuarios').then(async us => {
      this.listausuarios   = us;


      let usuarioLogueado :any = JSON.parse(sessionStorage.getItem("Usuarios"));
      
      let usuariosBD = this.listausuarios.find(elem => (elem.inscriptoBD == true));
      let usuariosMS1 = this.listausuarios.find(elem => (elem.inscriptoMS1 == true));
      let usuariosLABO4 = this.listausuarios.find(elem => (elem.inscriptoLABO4 == true));
      console.log(usuariosBD);
      console.log(usuariosMS1);
      console.log(usuariosLABO4);


   
      if (usuariosBD !== undefined) {
     
        this.listausuariosMostrar.push(usuariosBD);
      

      }
      else if (usuariosMS1 !== undefined) {
        this.listausuariosMostrar.push(usuariosMS1);
        
      }
      else if (usuariosLABO4 !== undefined) {
        this.listausuariosMostrar.push(usuariosLABO4);
        console.log(this.listausuariosMostrar);
      }
        
        
    });  

  }

}
