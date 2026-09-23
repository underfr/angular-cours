import {Component, signal} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-observables-simple',
  styleUrl: './observables-simple.css',
  templateUrl: './observables-simple.html',
})
export class ObservablesSimple {
  numbers = signal<number[]>([]);
  subscription: Subscription | null = null;
  paused = signal<boolean>(false);
  ngOnDestroy() {
    this.stopSubscription()
  }

  start() {
    this.stopSubscription()
    this.paused.set(false)
    const interval$ = interval(1000);

    this.subscription = interval$.subscribe(() => {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      this.numbers.update(prev => [...prev, randomNum]);
      console.log(randomNum)
    });
  }

  stopSubscription(){
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  pauseResume(){
    this.paused.update(p => !p)
    if (this.paused()){
      this.stopSubscription()
    }
    if (!this.paused){
      this.start()
    }
  }

  stop(){
    this.stopSubscription()
    this.numbers.set([])
  }
}
