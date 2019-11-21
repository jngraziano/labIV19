import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import {Materia} from '../../clases/materia';

@Component({
  selector: 'app-lista-materias',
  templateUrl: './lista-materias.component.html',
  styleUrls: ['./lista-materias.component.css']
})
export class ListaMateriasComponent implements OnInit {

  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
  listaMaterias:Observable<any[]>;
  lista: Array<any> = [];


  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { 

    this.coleccionTipadaFirebase= this.db.collection<any>('materiasAdmin', ref => ref.orderBy("cuatrimestre")); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.listaMaterias=this.coleccionTipadaFirebase.valueChanges();
    this.listaMaterias.subscribe(x => {
        this.lista = x
        
    })


  }

  ngOnInit() {
  }

}
