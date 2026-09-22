import { Component } from '@angular/core';
import {ActiveUser} from './active-user/active-user';
import {User, UserData} from './user-data/user-data';

@Component({
  imports: [
    ActiveUser,
    UserData
  ],
  selector: 'app-component-communication',
  styleUrl: './component-communication.css',
  templateUrl: './component-communication.html',
})
export class ComponentCommunication {
  currentUser: User = {id: '', name: '', age: null}
  handleNotification(event:User){
    this.currentUser = event
  }
}
