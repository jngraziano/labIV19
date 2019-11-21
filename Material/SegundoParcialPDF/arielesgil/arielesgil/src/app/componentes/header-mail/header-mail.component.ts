import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service'
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header-mail',
  templateUrl: './header-mail.component.html',
  styleUrls: ['./header-mail.component.css']
})
export class HeaderMailComponent implements OnInit {

  email: string = localStorage.getItem("email");

  constructor(private auth : AuthService) {
    
   }

  ngOnInit() {
    
  }

  logueado()
  {
    if(this.email != null)
      return true;
    return false;
  }
}