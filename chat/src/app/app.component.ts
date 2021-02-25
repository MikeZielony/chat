import { Component } from '@angular/core';

import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/app';

const config = {
  apiKey: '',
  databaseURL: 'https://angular-chat-1af7a-default-rtdb.europe-west1.firebasedatabase.app'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);

  }
}
