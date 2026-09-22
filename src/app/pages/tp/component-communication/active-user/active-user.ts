import {Component, Input} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-active-user',
  styleUrl: './active-user.css',
  templateUrl: './active-user.html',
})
export class ActiveUser {
  @Input() userName: string = ''
  @Input() userAge: number|null = 0
  @Input() userId: string = ''
}
