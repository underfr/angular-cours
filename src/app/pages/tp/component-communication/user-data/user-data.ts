import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

export interface User {
  id: string
  name: string
  age: number | null
}

@Component({
  imports: [
    FormsModule
  ],
  selector: 'app-user-data',
  styleUrl: './user-data.css',
  templateUrl: './user-data.html',
})
export class UserData {
  userName = ''
  userAge = 0
  @Output() notify = new EventEmitter<User>()
  handleSubmit(){
    const newUser:User = {
      id: crypto.randomUUID(),
      name: this.userName,
      age: this.userAge
    }
    this.notify.emit(newUser)
  }
}
