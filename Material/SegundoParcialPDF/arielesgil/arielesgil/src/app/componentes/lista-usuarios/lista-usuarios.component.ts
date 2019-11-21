import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
  ListadoDeMascotas:Observable<any[]>;
  lista: Array<any> = [];
  lista2: Array<any> = [];
  tipo: string;
  mostrar:boolean = false;

  constructor(private db: AngularFirestore) { 

    this.coleccionTipadaFirebase= this.db.collection<any>('usuarios'); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.ListadoDeMascotas=this.coleccionTipadaFirebase.valueChanges();
    this.ListadoDeMascotas.subscribe(x => {
        this.lista = x
        
    })

  }
  listarTipo(tipo: string){
    this.tipo=tipo;
    console.log(this.tipo);
   this.coleccionTipadaFirebase= this.db.collection<any>('usuarios', ref => ref.where("tipo", "==", tipo)); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.ListadoDeMascotas=this.coleccionTipadaFirebase.valueChanges();
    this.ListadoDeMascotas.subscribe(x => {
        this.lista2 = x
        
    });
    this.mostrar=true;
  }

  ngOnInit() {
  }

}