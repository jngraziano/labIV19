import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { Materia } from './../../clases/materia';

@Component({
  selector: 'app-inscripcion-materia',
  templateUrl: './inscripcion-materia.component.html',
  styleUrls: ['./inscripcion-materia.component.css']
})
export class InscripcionMateriaComponent implements OnInit {
  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
  listaMaterias:Observable<any[]>;
  lista: Array<any> = [];
  lista2: any[];


  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { 

    this.coleccionTipadaFirebase= this.db.collection<any>('materiasAdmin'); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.listaMaterias=this.coleccionTipadaFirebase.valueChanges();
    
    this.listaMaterias.subscribe(x => {
        this.lista = x
        
    })
    

  }


  anotarse(objeto:Materia)
  {
    console.log(objeto);
    let email = sessionStorage.getItem("email");
    let id = objeto.nombre + "-" + email
    this.db.collection('inscripciones').doc(id).set({

      nombre: objeto.nombre,
      cuatrimestre: objeto.cuatrimestre,
      alumno: email,
      emailProfesor: objeto.emailProfesor

    })
    .then(function(docRef) {
      console.log("Se guarda la inscripcion en base ");
      
  })
  .catch(function(error) {
      console.error("Error al escribir la materia", error);
  });
  }

  ngOnInit() {
  }

}
