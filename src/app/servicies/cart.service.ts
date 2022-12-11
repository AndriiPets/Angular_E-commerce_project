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

  clearRow(row: CartItem): void {
    const filteredItems = this.cart.value.items.filter(item => item.id !== row.id);

    this.cart.next({ items: filteredItems});
    this.snackBar.open(`${row.name} removed from cart.`, 'Ok', {duration: 3000})
  }

  addItem(item: CartItem, operation: string): void {
    const mappedItems = this.cart.value.items.map((_item => {
      if (item.id === _item.id) {
        if (operation === 'add') {
          _item.quantity += 1;
        } else {
          _item.quantity <= 1? _item.quantity === 1: _item.quantity -= 1;
        }
      }
      return _item;
    }));

    this.cart.next({ items: mappedItems})
  }

}
