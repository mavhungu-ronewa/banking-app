import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userIsLoggedIn: boolean = false;
  constructor(private httpService: HttpClient) { }

  checkLoginStatus(): boolean {
    return this.userIsLoggedIn;
  }
  login(): void {
    this.userIsLoggedIn = true;
  }
  logout(): void {
    this.userIsLoggedIn = false;
  }
}
