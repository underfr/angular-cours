import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  imports: [
    NgClass
  ],
  selector: 'app-directives',
  styleUrl: './directives.css',
  templateUrl: './directives.html',
})
export class Directives {
  isShown:boolean = false
  count:number = 0
  nbClick:number[] = []
  showDetail():void{
    this.isShown = !this.isShown
    this.counter()
  }

  counter():void{
    this.count++
    this.nbClick.push(this.count)
  }
}
