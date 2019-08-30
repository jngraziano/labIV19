import { Component } from '@angular/core';

import { FIREBASE_CONFIG } from '../app/app.firebase.config';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CLase02';
  constructor(){
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
