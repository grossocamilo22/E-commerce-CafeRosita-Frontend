import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopPagesComponent } from './pages/shop-pages/shop-pages.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductsModule } from '../products/products.module';


@NgModule({
  declarations: [
    ShopPagesComponent
  ],
  imports: [
    CommonModule,
    RouterLink, 
    RouterLinkActive,
    ShopRoutingModule,
    SharedModule,
    ProductsModule
  ]
})
export class ShopModule { }
