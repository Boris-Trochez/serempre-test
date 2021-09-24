import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public itemChosen: string = 'item-full';

  public imgCarousel: any[] = [
    {
      name: 'item-full',
      url: '../../../../assets/img/item/carousel/item-full.png'
    },
    {
      name: 'item',
      url: '../../../../assets/img/item/carousel/item.png'
    },
    {
      name: 'item-detail',
      url: '../../../../assets/img/item/carousel/item-detail.png'
    }
  ];

  public itemFeatures: any[] = [
    {
      size: 'small',
      icon: '../../../../assets/img/item-features/small/Path.png',
      label: 'Customizable Touch Controls'
    },
    {
      size: 'small',
      icon: '../../../../assets/img/item-features/small/Shape.png',
      label: 'Built-in Equalizer'
    },
    {
      size: 'small',
      icon: '../../../../assets/img/item-features/small/Shape.png',
      label: 'Active Noise Cancellation'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  chooseItem( item: string ) {
    this.itemChosen = item;
  }

}
