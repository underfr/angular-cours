import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event-binding-exercice',
  styleUrl: './event-binding-exercice.css',
  templateUrl: './event-binding-exercice.html',
})
export class EventBindingExercice {
  constructor() {
    setTimeout(()=>{
      this.isButtonDisabled = true
    }, 3000)
  }
  keyPressed:string = ''
  isButtonDisabled:boolean=false
  listFriendsCreationStatus:string= 'Aucun ami'
  onInputChange(event: Event){
    const data = event.target as HTMLInputElement
    this.keyPressed = data.value
  }
}
