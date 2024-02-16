import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './modules/home/pages/home-pages/home-pages.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    title:'auth'
  },
  {
  path:'',
  component:HomePagesComponent,
  loadChildren: () => import('./modules/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: ''
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
