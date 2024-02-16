import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SharedModule } from '../../shared/shared.module';
import { MainTemplateComponent } from '../../template/pages';
import { SearchComponent } from './Components/search/search.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MainTemplateComponent,
    SearchComponent
  ]
})
export class HomeModule { }
