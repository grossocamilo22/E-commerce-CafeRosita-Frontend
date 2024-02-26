import { Component, Input } from '@angular/core';
import { Product } from '../../../core/interfaces/product';

@Component({
  selector: 'card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  @Input() product!: Product;
  
  
}
