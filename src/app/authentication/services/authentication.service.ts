import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userIsLoggedIn: boolean = false;
  constructor() { }

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
