import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs'
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({items: []})

  constructor(private snackBar: MatSnackBar) {}

  addToCart(item: CartItem):void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find(_item => _item.id === item.id)

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this.snackBar.open('1 item added to the cart.', 'Ok', {duration: 3000});
  }

  
  getTotal(items: Array<CartItem>): number {
    return items
           .map((items) => items.price * items.quantity)
           .reduce((sum,curr) => sum + curr, 0);
  }

  clearCart(): void {
    this.cart.next({ items:[]});
    this.snackBar.open('cart is cleared.', 'Ok', {duration: 3000});
  }

}
