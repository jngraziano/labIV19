import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

import { Materia } from "../../clases/materia";
import { Usuario } from "../../clases/usuario";

import { FirebaseService } from "../../services/firebase.service";

import * as firebase from "firebase";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Input() listadoMaterias: Array<Materia> = Array<Materia>();
  divOculto:boolean = false;
  // listaprofesores: any = [];
  listaprofesores =[];


  constructor(private baseService:FirebaseService,
              private builder: FormBuilder) {
                this.listaprofesores = [];
               }

  nombre = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  cuatrimestre = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  
  cupos = new FormControl('', [
    Validators.required
  ]);

  profesor = new FormControl(null, [
    // null
    // Validators.required
  ]);
  

  // sexo = new FormControl('');


  registroForm: FormGroup = this.builder.group({
    nombre: this.nombre,
    cuatrimestre: this.cuatrimestre,
    cupos: this.cupos,
    profesor: this.profesor
   
  });

  ngOnInit() {
    this.traerDataTable();

  }

  async traerDataTable(){
    await this.baseService.getItems('appTest/materias').then(async mat => {
      this.listadoMaterias   = mat;
      this.listaprofesores = [];  
      this.listadoMaterias.forEach(element => {
      this.listaprofesores.push(element.nombreProfesor);
      console.log(this.listaprofesores);
      });
      // this.traerAcargo();
    });  
    
  }

  abrirForm(){
    this.divOculto = true;
  }

  IngresarMateria(){
   

    console.log(this.registroForm);

   
    let IngresarMateria = new Materia(this.registroForm.get('nombre').value,this.registroForm.get('cuatrimestre').value,
            this.registroForm.get('cupos').value,this.registroForm.get('profesor').value);
            console.log(IngresarMateria); 
            this.listaprofesores = [];
            this.baseService.addItem('appTest/materias', IngresarMateria); 


            // this.usuarioRegistrado = false;
            // this.agregoimagenErrorMsg = false;
            // this.eliminOK = false;
            // this.agregOK = true;
            // localStorage.setItem("ImagenSeleccionada","");

            // let usuarioRegistrado = JSON.parse(sessionStorage.getItem("Usuarios"))
            // let usuarioConMat = {
            //   clave: "1234",
            //   email: "alumno@gmail.com",
            //   inscriptoBD: false,
            //   inscriptoLABO4: true,
            //   inscriptoMS1: false,
            //   nombre:  "Carlos",
            //   perfil:  "alumno"

            // }

            // this.baseService.updateItem('appTest/Usuarios',usuarioRegistrado.key, IngresarMateria); 

        


            this.registroForm.reset();
            this.cerrarX();
            this.traerDataTable();

  }

  cerrarX()
  {
    this.divOculto = false;
  }

}
