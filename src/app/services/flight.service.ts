import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Products } from "../modules/products";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  getFlights() : Observable<any> {
    return this.http.get("https://fakestoreapi.com/users?limit=5");
  }
  getFightById() {
    return '';
  }
  getProducts(): Observable<any> {
    return this.http.get("https://fakestoreapi.com/products")
  }
}
