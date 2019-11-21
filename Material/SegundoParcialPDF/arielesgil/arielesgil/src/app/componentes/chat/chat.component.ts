import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import {Materia} from '../../clases/materia';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  materiaSeleccionada: string;
  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
  listaMaterias:Observable<any[]>;
  lista: Array<any> = [];
  mensaje:string;
  lista2: Array<any> = [];
  coleccionTipadaFirebase2:AngularFirestoreCollection<any>;
  mensajes:Observable<any[]>;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { 

    this.coleccionTipadaFirebase= this.db.collection<any>('materiasAdmin'); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.listaMaterias=this.coleccionTipadaFirebase.valueChanges();
    this.listaMaterias.subscribe(x => {
        this.lista = x
        
    });
    
  }

  traerChatPorMateria()
  {
    
    console.log(this.materiaSeleccionada)
    this.coleccionTipadaFirebase2= this.db.collection<any>('chat', ref => ref.where("materia", "==", this.materiaSeleccionada).orderBy('hora')); 
    //this.coleccionTipadaFirebase2= this.db.collection<any>('chat', ref => ref.orderBy('hora'));
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.mensajes=this.coleccionTipadaFirebase2.valueChanges();
    this.mensajes.subscribe(x => {
        this.lista2 = x
        
    })
    
  }


  nuevoMensaje()
  {
    if(this.mensaje == undefined )
    {
      alert("no hay mensaje")
      return;
    }
      
    
    this.db.collection("chat").add({
      mensaje: this.mensaje,
      user: localStorage.getItem("email"),
      hora: Date.now(),
      materia: this.materiaSeleccionada
  })
  .then(function(docRef) {
    console.log("Se guarda el mensaje ", docRef.id);
})
.catch(function(error) {
    console.error("Error al escribir el mensaje ", error);
});
    
    this.mensaje="";
}
  

  ngOnInit() {
  }

}
