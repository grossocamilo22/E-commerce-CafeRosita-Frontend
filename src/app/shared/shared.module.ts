import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardProductComponent, ParragraphHistoryComponent, SearchComponent, VideoHistoryComponent } from './components';
import { MainLayoutComponent } from './layout';
import { FooterComponent, HeaderComponent, SidenavComponent } from './template';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ParragraphHistoryComponent,
    VideoHistoryComponent,
    CardProductComponent,
    SearchComponent,
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ParragraphHistoryComponent,
    VideoHistoryComponent,
    CardProductComponent,
    MainLayoutComponent
  ],
})
export class SharedModule {}
