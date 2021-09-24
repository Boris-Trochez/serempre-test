import { Component, OnInit } from '@angular/core';
import { PriceItemService } from '../../../services/price-item.service';

@Component({
  selector: 'app-set-purchase-options',
  templateUrl: './set-purchase-options.component.html',
  styleUrls: ['./set-purchase-options.component.css']
})
export class SetPurchaseOptionsComponent implements OnInit {

  itemPrice: number = 295.95;

  constructor(
    private priceItemService: PriceItemService
  ) { }

  ngOnInit(): void {
  }

  setItemPrice( itemPrice: number ) {
    this.priceItemService.setItemPrice( itemPrice );
    this.getItemPrice();
  }

  getItemPrice() {
    this.itemPrice = this.priceItemService.getItemPrice();
  }

}
