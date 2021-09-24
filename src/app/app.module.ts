import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { ItemComponent } from './stock/components/item/item.component';
import { ItemInformationComponent } from './stock/components/item-information/item-information.component';
import { ItemAboutTabsComponent } from './stock/components/item-information/item-about-tabs/item-about-tabs.component';
import { SetPurchaseOptionsComponent } from './stock/components/item-information/set-purchase-options/set-purchase-options.component';
import { SpecificationsComponent } from './stock/components/item-information/specifications/specifications.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    ItemComponent,
    ItemInformationComponent,
    ItemAboutTabsComponent,
    SetPurchaseOptionsComponent,
    SpecificationsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
