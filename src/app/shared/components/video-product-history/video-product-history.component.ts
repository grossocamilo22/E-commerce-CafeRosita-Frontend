import { Component } from '@angular/core';

@Component({
  selector: 'video-product-history',
  templateUrl: './video-product-history.component.html',
  styleUrls: ['./video-product-history.component.scss']
})
export class VideoHistoryComponent {
  isLoading = true; // Mostrar spinner inicialmente

  

  onLoad() {
    this.isLoading = false; // Ocultar spinner cuando el video cargue
  }
}
