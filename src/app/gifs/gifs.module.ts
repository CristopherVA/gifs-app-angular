import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CartListComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    SearchBoxComponent,
    CartListComponent
  ]
})
export class GifsModule { }
