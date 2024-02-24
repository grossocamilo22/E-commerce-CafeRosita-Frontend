import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'history',
    loadChildren:()=> import('../history/history.module').then(m=>m.HistoryModule)
  },
  {
    path: 'products',
    loadChildren: ()=> import('../products/products.module').then(m=>m.ProductsModule)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
