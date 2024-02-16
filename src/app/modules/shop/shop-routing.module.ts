import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopPagesComponent } from './pages/shop-pages/shop-pages.component';

const routes: Routes = [
  {
    path: '',
    component: ShopPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
