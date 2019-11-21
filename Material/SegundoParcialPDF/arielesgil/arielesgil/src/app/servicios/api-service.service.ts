import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Usuario} from './../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private coleccion: AngularFirestoreCollection<any>;
  private listaObservable: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.coleccion = this.afs.collection<any>('usuarios');
   }

  traerTodos() {
    // return this.listaObservable
    return this.listaObservable = this.coleccion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Usuario;
        return data;
      });
    })); // todo esto es para poder traernos el id (lo crea automaticamente firebase en nuestra coleccion)
  }


}
