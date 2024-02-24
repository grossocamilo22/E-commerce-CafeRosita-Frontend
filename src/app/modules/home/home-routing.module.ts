import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'history',
    loadChildren:()=> import('../history/history.module').then(m=>m.HistoryModule)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
