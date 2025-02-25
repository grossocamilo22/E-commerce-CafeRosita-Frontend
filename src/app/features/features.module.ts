import { NgModule } from '@angular/core';
import { FeaturesRoutingModule } from './features-routing.module';
import { HistoryComponent } from './history';
import { HomeComponent } from './home';
import { ProductDetailComponent, ProductListComponent } from './products';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { UbicationComponent } from './ubication/ubication.component';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
    HistoryComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductListComponent,
    UbicationComponent,
  ],
  imports: [FeaturesRoutingModule, SharedModule,MatIconModule,CommonModule,LeafletModule],
})
export class FeaturesModule {}
