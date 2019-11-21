import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno-page',
  templateUrl: './alumno-page.component.html',
  styleUrls: ['./alumno-page.component.css']
})
export class AlumnoPageComponent implements OnInit {

  muestro: boolean;
  constructor() { 
    
   }

  ngOnInit() {
    this.muestro= false;
  }

  mostrar()
  {
    this.muestro= true;
  }

  mostrar2()
  {
    this.muestro= false;
  }
}
