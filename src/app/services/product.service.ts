import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsSubject = new BehaviorSubject<any[]>([]);
  products$: Observable<any[]> = this.productsSubject.asObservable();

  private isModalOpenSubject = new BehaviorSubject<boolean>(false);
  isModalOpen$: Observable<boolean> = this.isModalOpenSubject.asObservable();

  constructor() { }

  getProducts(): Observable<any[]> {
    return this.products$;
  }
  openModal() {
    this.isModalOpenSubject.next(true);
  }
  closeModal() {
    this.isModalOpenSubject.next(false);
  }
}
