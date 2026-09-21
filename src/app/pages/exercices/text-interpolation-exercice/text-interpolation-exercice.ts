import { Component } from '@angular/core';
interface User {
  firstName: string,
  lastName: string,
  age: number,
  status: boolean,
  role: string
}
@Component({
  imports: [],
  selector: 'app-text-interpolation-exercice',
  styleUrl: './text-interpolation-exercice.css',
  templateUrl: './text-interpolation-exercice.html',
})
export class TextInterpolationExercice {
  pourcentage:string = '75%';
  note:number = 20;
  score:number= 15;
  skills :string[]= ['Angular 22','TypeScript','DaisyUI'];
  user:User = {firstName:'michel', lastName: 'pignon', age: 44, role:'Dev', status: true}
  getFullName(): string {
    return `${this.user.firstName} ${this.user.lastName.toUpperCase()}`;
  }
}
