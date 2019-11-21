import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

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
