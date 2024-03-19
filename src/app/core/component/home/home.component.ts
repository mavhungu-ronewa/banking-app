import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from  "@ngrx/store";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { FlightService } from "../../../services/flight.service";
import * as ProductActions from "../../../store/product.actions";
import { Products } from "../../../modules/products";
import { selectProducts } from "../../../store/product.selectors";
import * as CartActions from '../../../store/cart/cart.actions';
import { ProductService } from "../../../services/product.service";
import { CartService } from "../../../services/cart.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  //Flights : Products[] = [];
  //Products: Products[] = [];
  //products$: Observable<Products[]>;
  Hotels: string[] = [];
  Rides: string[] = [];
  //count$: Observable<number>
  refresh: boolean = true;
  interval: any;

  products$ = this.store.select(selectProducts);
  constructor(
    private store: Store,
    private flights: FlightService,
    private productService: ProductService,
    private cartService: CartService
  ) {
    //this.count$ = store.select('count');
  }

  ngOnInit() {
    this.store.dispatch(ProductActions.loadProducts());
    //this.getFlights();
/*    this.getHotels();
    this.getRides();*/
    //this.getProducts();
  }

 /* getFlights() {
    this.flights.getFlights().subscribe({
      next: (result)=>{
        this.Flights = result;
      }
    });
  }*/
  /*getProducts() {
    this.flights.getProducts().subscribe({
      next: (products)=> {
        this.Products = products;
      }
    })
  }*/
  getProduct() {
    this.store.dispatch(ProductActions.getProducts());
  }
  reset() {
    this.store.dispatch(ProductActions.clearCart());
  }
  getHotels() {
    this.Hotels = [];
  }
  getRides() {
    this.Rides = [];
  }
  addToCart(product: Products) {
    //this.store.dispatch(CartActions.addToCart({ product }));
    this.cartService.addToCart(product);
  }

}
