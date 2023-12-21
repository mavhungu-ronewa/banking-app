import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from  "@ngrx/store";
import { Observable } from "rxjs";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { FlightService } from "../../../services/flight.service";
import { getProducts, clearCart } from "../../../store/product.actions";
import { Products } from "../../../modules/products";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  Flights : Products[] = [];
  Products: Products[] = [];
  Hotels: string[] = [];
  Rides: string[] = [];
  count$: Observable<number>
  refresh: boolean = true;
  interval: any;

  constructor(
    private store: Store<{count: number}>,
    private flights: FlightService
  ) {
    this.count$ = store.select('count');
  }
  ngOnInit() {
    //this.getFlights();
    this.getHotels();
    this.getRides();
    this.getProducts();
    /*this.interval = setInterval(()=>{
      if(this.refresh) {
       this.getFlights();
      }
    },15000);*/
  }

  getFlights() {
    this.flights.getFlights().subscribe({
      next: (result)=>{
        this.Flights = result;
      }
    });
  }
  getProducts() {
    this.flights.getProducts().subscribe({
      next: (products)=> {
        //console.log(products);
        this.Products = products;
      }
    })
  }
  getProduct() {
    this.store.dispatch(getProducts());
  }
  reset() {
    this.store.dispatch(clearCart());
  }
  getHotels() {
    this.Hotels = [];
  }
  getRides() {
    this.Rides = [];
  }

}
