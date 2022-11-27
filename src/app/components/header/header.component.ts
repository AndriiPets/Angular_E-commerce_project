import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/servicies/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _cart: Cart = { items:[] };
  itemsQnt = 0;

  @Input()
    get cart() {
      return this._cart;
    };
    set cart(cart:Cart) {
      this._cart = cart;

      this.itemsQnt = cart.items
        .map(item => item.quantity)
        .reduce((prev, curr) => prev + curr, 0)
    }

  constructor(private cartService: CartService) { }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items)
  }

  onClearCart(): void {
    this.cartService.clearCart();
  } 

  ngOnInit(): void {
  }

}
