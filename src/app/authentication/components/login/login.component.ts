import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLinkActive, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private route: Router) {}

    loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  onSubmit() {
    if(this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Logging in ...', loginData);
      this.loginForm.reset();
    }else {
      this.loginForm.markAllAsTouched();
    }
  }
  get loginControls() { return this.loginForm.controls;}

}
