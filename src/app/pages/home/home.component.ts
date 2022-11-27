import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model'
import { CartService } from 'src/app/servicies/cart.service';

const ROW_HEIGHT:{[id:number]: number} = { 
  1: 400,
  3: 355,
  4: 350,
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cols:number = 3;
  rowHeight:number = ROW_HEIGHT[this.cols];
  category:string | undefined;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onColumnCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }

}
