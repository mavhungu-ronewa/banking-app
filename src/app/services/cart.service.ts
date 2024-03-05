import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CartItem } from "../modules/cartItems";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

  private isModalOpenSubject = new BehaviorSubject<boolean>(false);
  isModalOpen$: Observable<boolean> = this.isModalOpenSubject.asObservable();

  constructor() { }

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

 /* getCartItems(): Observable<CartItem[]> {
    return this.cartItems$;
  }*/

  addToCart(item: any) {
    const currentItems = this.getCartItems();
    const existingItem = currentItems.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItemsSubject.next([...currentItems, { ...item, quantity: 1 }]);
    }
  }

  removeFromCart(id: string) {
    const currentItems = this.getCartItems();
    const updatedItems = currentItems.filter(item => item.id !== id);
    this.cartItemsSubject.next(updatedItems);
  }

/*  removeFromCart(item: any) {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter(cartItem => cartItem.id !== item.id);
    this.cartItemsSubject.next(updatedItems);
  }*/

  increaseQuantity(id: string) {
    const currentItems = this.getCartItems();
    const itemToUpdate = currentItems.find(item => item.id === id);

    if (itemToUpdate) {
      itemToUpdate.quantity++;
      this.cartItemsSubject.next([...currentItems]);
    }
  }

  decreaseQuantity(id: string) {
    const currentItems = this.getCartItems();
    const itemToUpdate = currentItems.find(item => item.id === id);

    if (itemToUpdate) {
      if (itemToUpdate.quantity > 1) {
        itemToUpdate.quantity--;
        this.cartItemsSubject.next([...currentItems]);
      } else {
        this.removeFromCart(id);
      }
    }
  }

  openCartModal() {
    this.isModalOpenSubject.next(true);
  }

  closeModal() {
    this.isModalOpenSubject.next(false);
  }

/*  getTotalPrice(): Observable<string> {
    return this.cartItems$.pipe(
      map(items => items.reduce((total, item) => total + item.price, 0))
    );
  }*/
}
