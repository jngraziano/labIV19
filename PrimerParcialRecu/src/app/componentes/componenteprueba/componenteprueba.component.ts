import { Component, OnInit,  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MihttpService } from "../../services/mihttp.service";
import { element } from 'protractor';

@Component({
  selector: 'app-componenteprueba',
  templateUrl: './componenteprueba.component.html',
  styleUrls: ['./componenteprueba.component.scss']
})
export class ComponentepruebaComponent implements OnInit {

  algo: any;
  pais: any;
  paisNombre: any;
  nombrePais: string = "";

  constructor(public mihttp: MihttpService) { }

  ngOnInit() {
  }

  clickGET(){
  
   this.mihttp.httpGetO("https://restcountries.eu/rest/v2/all ").subscribe(element => this.pais = element);
  //  for (let i = 0; i < this.pais.length; i++) {
  //    console.info(this.pais[i]);
  //    this.paisNombre = this.pais[i];
     
  //  }
   
  }

}
