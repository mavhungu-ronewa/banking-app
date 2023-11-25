import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerError: string ='';

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    username: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder, private authService: AuthenticationService) {}
    onSubmit() {
      if(this.registerForm.valid) {
        const registerData = this.registerForm.value;
        console.log('Registering....', registerData);
        this.authService.login(registerData)
          .subscribe((success)=>{
            if(success) {
              this.registerForm.reset();
            }else {
              this.registerError = '';
            }
          },
            (error)=>{
              this.registerError = '';
            });
      }else {
        this.registerForm.markAllAsTouched();
      }
    }
    get registerControls() {
      return this.registerForm.controls;
    }
}
