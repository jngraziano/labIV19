import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proferor-page',
  templateUrl: './proferor-page.component.html',
  styleUrls: ['./proferor-page.component.css']
})
export class ProferorPageComponent implements OnInit {

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

