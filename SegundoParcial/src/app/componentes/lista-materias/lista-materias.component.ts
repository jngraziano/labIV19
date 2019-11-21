import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-materias',
  templateUrl: './lista-materias.component.html',
  styleUrls: ['./lista-materias.component.scss']
})
export class ListaMateriasComponent implements OnInit {

  usuarioLogeado: any;

  constructor() {

    this.usuarioLogeado = JSON.parse(sessionStorage.getItem("Usuarios"));

   }

  ngOnInit() {
    
  }

}
