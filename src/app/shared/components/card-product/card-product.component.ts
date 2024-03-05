import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Product } from '../../../core/interfaces/product';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

  @Input() modalOpened: boolean = false;
  @Input() product!: Product;
  @Input() matCardSmall: boolean = false;
  @Output() closeModal: any = new EventEmitter<void>();
  constructor(private router: Router) {

  }

  navigateToProduct() {
    if (this.modalOpened) {
      this.closeModal.emit();
    }
    this.router.navigateByUrl('product/1234')
  }

}
