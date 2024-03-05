import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from "rxjs";
import { ProductService } from "../../../services/product.service";
import { CartService } from "../../../services/cart.service";
import { CartItem } from "../../../modules/cartItems";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  /*isModalOpen$: Observable<boolean> = false;
  cartItems$: Observable<any[]>;
  totalPrice$: Observable<number>;*/

  cartItems: CartItem[] = [];
  totalPrice = 0;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  products$ = this.productService.getProducts();

  isModalOpen$ = this.cartService.isModalOpen$;
  cartItems$ = this.cartService.getCartItems();
  //totalPrice$ = this.cartService.getTotalPrice();

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  removeFromCart(id: string) {
    this.cartService.removeFromCart(id);
  }

  increaseQuantity(id: string) {
    this.cartService.increaseQuantity(id);
  }

  decreaseQuantity(id: string) {
    this.cartService.decreaseQuantity(id);
  }

  calculateTotal() {
    this.totalPrice = this.cartItems.reduce((acc: number, item: CartItem) => acc + (parseFloat(item.price) * item.quantity), 0);
  }

  closeModal() {
    this.cartService.closeModal();
  }

}
