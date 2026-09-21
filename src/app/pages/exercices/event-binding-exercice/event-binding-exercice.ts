import {Component, signal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event-binding-exercice',
  styleUrl: './event-binding-exercice.css',
  templateUrl: './event-binding-exercice.html',
})
export class EventBindingExercice {
  keyPressed:string = ''
  isButtonDisabled= signal(false)
  listFriendsCreationStatus:string= 'Aucun ami'
  constructor() {
    setTimeout(()=>{
      this.isButtonDisabled.set(true)
    }, 3000)
  }

  onInputChange(event: Event){
    const data = event.target as HTMLInputElement
    this.keyPressed = data.value
  }
}
