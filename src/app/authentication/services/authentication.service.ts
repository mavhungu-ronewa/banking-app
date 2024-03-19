import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable, throwError, Subject, BehaviorSubject } from "rxjs";
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  loginStatusChanged = new Subject<boolean>();
  loginSuccess$: Subject<void> =  new Subject<void>();
  private apiUrl = "https://fakestoreapi.com";
  constructor(private http: HttpClient, private router: Router) { }

  register(email: string, password: string): Observable<any> {
    const registerData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/register`, registerData)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }
  private handleError(error: any) {
    let errorMessage = 'An unknown error occurred';
    if (error.error && error.error.message) {
      errorMessage = error.error.message;
    }
    return throwError(errorMessage);
  }

  checkLoginStatus() {
    return this.isLoggedIn$;
  }
  login(data: any): void {
    this.http.post<any>(`${this.apiUrl}/auth/login`, data)
        .subscribe({
          next: (response) => {
            if (response && response.token) {
              this.isLoggedInSubject.next(true);
              this.loginStatusChanged.next(true);
              this.loginSuccess$.next();
              this.router.navigate(['/']);
            }
          },
          error: (error: HttpErrorResponse) => {
            console.error(`Loin Failed with status code ${error.status} with message of: ${error.message}`);
          }
        });
      /*.pipe(
        catchError(error => this.handleError(error))
      );*/
  }
  logout(): void {
    this.isLoggedInSubject.next(false);
    this.loginStatusChanged.next(false);
  }
}
