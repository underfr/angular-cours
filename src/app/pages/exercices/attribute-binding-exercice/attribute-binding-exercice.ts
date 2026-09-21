import { Component } from '@angular/core';

interface User {
  id: string
  name: string
  age: number
  image: string
  bio: string
  status: 'online' | 'offline'
  github: string
}

@Component({
  imports: [],
  selector: 'app-attribute-binding-exercice',
  styleUrl: './attribute-binding-exercice.css',
  templateUrl: './attribute-binding-exercice.html',
})
export class AttributeBindingExercice {
  user:User = {
    id: crypto.randomUUID(),
    name: 'Michel',
    age: 30,
    image: 'https://randomuser.me/api/portraits/men/29.jpg',
    bio: 'lorem ipsum',
    status: 'online',
    github: 'https://github.com/michel'
  }
}
