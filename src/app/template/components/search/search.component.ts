import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/interfaces';
import { Products } from '../../../core/data/products';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-search-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule,SharedModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
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
