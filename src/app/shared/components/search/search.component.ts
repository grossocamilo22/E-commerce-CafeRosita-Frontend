import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../../core/interfaces';
import { Products } from '../../../core/data/products';

@Component({
  selector: 'app-search-product',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  
  smallCardLetter: boolean = true;
  products: Product[] = Products;
  @Output() closeModalSearchProduct = new EventEmitter<boolean>();
  @Input() modalOpened!: boolean;
  
  closeModal() {
    this.smallCardLetter = false;
    this.closeModalSearchProduct.emit(false);
  }
  ngOnInit(): void {
  }

  

}
