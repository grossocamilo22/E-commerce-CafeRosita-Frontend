import { Component } from '@angular/core';
import { Product } from '../../../core/interfaces';
import { Products } from '../../../core/data/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: Product = Products[0];
  urlImages: string = '../../../../../assets/images'
}
