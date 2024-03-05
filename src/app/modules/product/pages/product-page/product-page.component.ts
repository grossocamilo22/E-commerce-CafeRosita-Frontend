import { Component } from '@angular/core';
import { Product } from '../../../../core/interfaces';
import { Products } from '../../../../core/data/products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  product: Product = Products[0];
  urlImages: string = '../../../../../assets/images'
}
