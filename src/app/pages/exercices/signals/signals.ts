import {Component, computed, effect, signal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signals',
  styleUrl: './signals.css',
  templateUrl: './signals.html',
})

export class Signals {

  private getInitialValue<T>(key:string, defaultValue: T):T{
    if (typeof localStorage !== 'undefined'){
      const saved = localStorage.getItem(key)
      if (saved !== null){
        return JSON.parse(saved)
      }
    }
    return defaultValue
  }

  quantity = signal<number>(this.getInitialValue('quantity', 1))
  unitPrice = signal<number>(35)
  discountCode = signal<0|10|20>(this.getInitialValue('discount-code', 0))
  isExpressShipping = signal<boolean>(this.getInitialValue('express-shipping', false))

  constructor() {
    effect(()=>{
      if (typeof localStorage !== 'undefined'){
        localStorage.setItem('quantity', JSON.stringify(this.quantity()))
        localStorage.setItem('discount-code', JSON.stringify(this.discountCode()))
        localStorage.setItem('express-shipping', JSON.stringify(this.isExpressShipping()))
      }
    })
  }

  subtotal = computed(() => {
    return this.quantity() * this.unitPrice()
  });

  discountAmount = computed(() => {
    return (this.subtotal() * this.discountCode()) /100
  });

  shippingFee = computed(() => {
    if (this.quantity() === 0) {
      return 0
    }
    if (this.isExpressShipping()){
      return 12
    }
    if (this.subtotal() >= 100){
      return 0
    }
    return 5
  });

  total = computed(() => {
    return (this.subtotal() - this.discountAmount()) + this.shippingFee()
  });

  addQuantity(){
    this.quantity.set(this.quantity()+1)
  }
  minusQuantity(){
    if(this.quantity()> 0){
      this.quantity.set(this.quantity()-1)
    } else {
      this.quantity.set(0)
    }
  }
  setDiscount(value:0|10|20){
    this.discountCode.set(value)
  }

  toggleShipping(){
    this.isExpressShipping.update(e => !e)
  }

  reset(){
    this.quantity.set(1)
    this.discountCode.set(0)
    this.isExpressShipping.set(false)
  }
}
