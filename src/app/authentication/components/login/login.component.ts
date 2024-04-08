import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLinkActive, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginError: string ='';
  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {}

    loginForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  onLogInSubmit() {
    if(this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.authService.login(loginData);
        /*.subscribe({
            next: (success) => {
              if (success) {
                this.loginForm.reset();
                this.router.navigate(['/']);
              } else {
                this.loginError = '';
              }
            }, error: (error: HttpErrorResponse) => {
              this.loginError = ''
            }
          }
        );*/
    }else {
      this.loginForm.markAllAsTouched();
    }
  }
  get loginControls() { return this.loginForm.controls;}

}
