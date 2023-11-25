import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { UserLogin, UserRegistration } from '../interfaces/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userIsLoggedIn: boolean = false;
  constructor(private http: HttpClient) { }

  checkLoginStatus() {
    return this.userIsLoggedIn;
  }
  login(data: any): Observable<UserLogin> {
    const { email, password } = data;
    if(email && password) {
      this.userIsLoggedIn=true;
      /*return of(true);*/
    }else {
      /*return of(false);*/
    }
      return this.http.get<UserLogin>(`http://localhost:3000/users`);
  }
  logout(): void {
    this.userIsLoggedIn=false;
  }
}
