import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceItemService {

  itemPrice: number = 295.95;
  constructor() { }

  setItemPrice( featureValue: number ) {
    this.itemPrice = this.itemPrice + featureValue;
  }

  getItemPrice() {
    return this.itemPrice;
  }
}
