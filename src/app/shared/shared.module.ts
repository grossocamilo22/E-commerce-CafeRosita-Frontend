import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParragraphHistoryComponent } from './components/parragraph-product-history/parragraph-product-history.component';
import { VideoHistoryComponent } from './components/video-product-history/video-product-history.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ParragraphHistoryComponent,
    VideoHistoryComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    ParragraphHistoryComponent,
    VideoHistoryComponent,
    CardProductComponent,

  ]
})
export class SharedModule { }
