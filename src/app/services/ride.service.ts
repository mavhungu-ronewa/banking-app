import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RideService {

  constructor(private http: HttpClient) { }
    getRides() {
      return '';
    }
    getRideById() {
      return '';
    }
}
