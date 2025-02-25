import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../core/interfaces';
import { Products } from '../../../core/data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  @Input() arrayLengthToShow:number = 0;
  products:Product[] = [];
  ngOnInit(): void {
    if(this.arrayLengthToShow > 0){
      this.products = Products.slice(0,this.arrayLengthToShow) 
    }else{
     this.products = Products;
    }
  }


}
