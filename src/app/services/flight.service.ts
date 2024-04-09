import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Products } from "../modules/products";

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  getFlights() : Observable<any> {
    return this.http.get(`${environment.Url}/users?limit=5`);
  }
  getFightById() {
    return '';
  }
  getProducts(): Observable<any> {
    return this.http.get(`${environment.Url}/products`);
  }
  getAllProductCategories(): Observable<any>{
    return this.http.get(`${environment.Url}/products/categories`);
  }
  getProductsByCategory(category: string): Observable<any>{
    return this.http.get(`${environment.Url}/products/category/${category}`);
  }
}
