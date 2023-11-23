import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    username: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder, private auth: AuthenticationService) {}
    onSubmit() {
      if(this.registerForm.valid) {
        const registerData = this.registerForm.value;
        console.log('Registering....', registerData);
        this.registerForm.reset();
      }else {
        this.registerForm.markAllAsTouched();
      }
    }
    get registerControls() {
      return this.registerForm.controls;
    }
}
