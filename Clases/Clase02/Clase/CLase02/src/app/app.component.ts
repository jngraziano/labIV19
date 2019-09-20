import { FIREBASE_CONFIG } from '../app/app.firebase.config';
import { RouterOutlet } from "@angular/router";
import { Component, HostBinding } from '@angular/core';

import * as firebase from 'firebase';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
      slideInAnimation
  ]
})
export class AppComponent {
  title = 'CLase02';
  constructor(){
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
