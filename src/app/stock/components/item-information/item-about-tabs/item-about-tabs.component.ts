import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-about-tabs',
  templateUrl: './item-about-tabs.component.html',
  styleUrls: ['./item-about-tabs.component.css']
})
export class ItemAboutTabsComponent implements OnInit {

  chosenTab: any = {
    tabName: 'Overview'
  }

  tabs: any[] = [
    {
      tabName: 'Overview',
    },
    {
      tabName: 'Features',
    },
    {
      tabName: "What is in the box?",
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  changeTab( tabName: string ) {
    this.chosenTab.tabName = tabName;
  }

}
