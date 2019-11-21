import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Materia } from "../../clases/materia";
import { Usuario } from "../../clases/usuario";

import { FirebaseService } from "../../services/firebase.service";



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Input() listadoMaterias: Array<Materia> = Array<Materia>();

  constructor(private baseService:FirebaseService) { }

  ngOnInit() {
    this.traerDataTable();

  }

  async traerDataTable(){
    await this.baseService.getItems('appTest/materias').then(async mat => {
      this.listadoMaterias   = mat;
    
      // this.traerAcargo();
    });  
    
  }

}
