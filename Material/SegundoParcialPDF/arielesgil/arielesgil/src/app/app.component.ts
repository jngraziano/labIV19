import { Component } from '@angular/core';
import {AuthService} from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modelo2parcial';
  
 private auth: AuthService;

  inicio()
  {
    sessionStorage.clear();
  }

  

  
}
