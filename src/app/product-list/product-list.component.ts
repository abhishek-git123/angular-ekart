import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name = "John Doe";
  product = {
    name: 'iPhone 15',
    price: 999,
    color: 'Black',
    discount: 8.5,
    inStock: 5,
    productImage: '/assets/images/iphone.png'
  }
  
  getDiscountedPrice(){
    return this.product.price - (this.product.discount * this.product.price /100)
  }

  isInStock(){
    return this.product.inStock > 0 ? false : true;
  }

}
