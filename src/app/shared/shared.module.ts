import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParragraphHistoryComponent } from './components/parragraph-product-history/parragraph-product-history.component';
import { VideoHistoryComponent } from './components/video-product-history/video-product-history.component';



@NgModule({
  declarations: [
    ParragraphHistoryComponent,
    VideoHistoryComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    ParragraphHistoryComponent,
    VideoHistoryComponent
  ]
})
export class SharedModule { }
