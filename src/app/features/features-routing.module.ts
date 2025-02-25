import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/layout';
import { HistoryComponent } from './history';
import { ProductDetailComponent, ProductListComponent } from './products';
import { HomeComponent } from './home';
import { UbicationComponent } from './ubication/ubication.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    title: 'auth',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
      {
        path:'ubication',
        component:UbicationComponent
      },
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
      {
        path: '**', //TODO 404 cuando no existe la ruta
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '**', //TODO 404 cuando no existe la ruta
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
