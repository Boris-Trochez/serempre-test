import { Component, OnInit } from '@angular/core';
import { PriceItemService } from '../../stock/services/price-item.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  priceItem: number = 0;
  constructor(
    private priceItemS: PriceItemService
  ) { }

  ngOnInit(): void {
    this.priceItem = this.priceItemS.getItemPrice();
  }
  

}
