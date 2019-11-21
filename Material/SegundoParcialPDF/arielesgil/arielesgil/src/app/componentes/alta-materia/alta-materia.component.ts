import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Validators, FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import {Materia} from '../../clases/materia';
import {Usuario} from '../../clases/usuario';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
  ListadoDeMascotas:Observable<any[]>;
  lista: Array<any> = [];
  lista3: Array<any> = [];
  unaMateria: Materia;
  unaMateria2: Materia;
  lista2: Array<any> = [];
  id: string;


  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private builder: FormBuilder) {

    
    this.unaMateria = new Materia();
    this.listarProfesores();
   }



  nombre = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(4)]);

    cuatrimestre = new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(4)]);
      
    

        cupos = new FormControl('', [
          Validators.required,
          Validators.min(10),
          Validators.max(30)]);

          profesor = new FormControl('', [
            Validators.required]
            );

        registroForm: FormGroup = this.builder.group({
          nombre: this.nombre,
          profesor: this.profesor,
          cupos: this.cupos,
          cuatrimestre: this.cuatrimestre
      
        })

  ngOnInit() {
  }

  listarProfesores()
  {
    this.coleccionTipadaFirebase= this.db.collection<any>('usuarios', ref => ref.where("tipo", "==", "profesor")); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.ListadoDeMascotas=this.coleccionTipadaFirebase.valueChanges();
    this.ListadoDeMascotas.subscribe(x => {
        this.lista3 = x
        
    })
  }


  enviar()
  {
    
   let emailProfe= this.registroForm.get('profesor').value
   console.log(emailProfe);

    let id = this.unaMateria.nombre + "-" + emailProfe;
   
    this.db.collection("materiasAdmin").doc(id).set({

      nombre: this.unaMateria.nombre,
      cuatrimestre: this.unaMateria.cuatrimestre,
      cupos: this.unaMateria.cupos,
      emailProfesor: emailProfe

    })
    .then(function(docRef) {
      console.log("Se guarda la materia en base ");
      alert("Se realiza el alta");
      
      
  })
  .catch(function(error) {
      console.error("Error al escribir la materia", error);
      alert("Error")
  });
  this.enBlanco();
  }

  enBlanco()
  {
    (<HTMLInputElement>document.getElementById('cuatrimestre')).value='';
    (<HTMLInputElement>document.getElementById('cupos')).value='';
    (<HTMLInputElement>document.getElementById('nombre')).value='';
    (<HTMLInputElement>document.getElementById('profesor')).value='';
  }
  

}
