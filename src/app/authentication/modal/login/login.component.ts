import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ModalService } from "../../services/modal.service";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  showModal: boolean = false;
  loginError: string ="";
  constructor(
    private modalService:ModalService,
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
  ) {}

  loginForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email2: ['', [Validators.required]],
    expiry: ['', [Validators.required]],
    cvc: ['', Validators.required],
  });
  ngOnInit() {
    this.modalService.showModal$.subscribe((value)=> {
      this.showModal = value;
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Logging in ...', loginData);
      this.authService.login(loginData)
        .subscribe((success)=>{
            if(success) {
              this.loginForm.reset();
              //this.router.navigate(['/home']);
            }
            else {
              this.loginError = '';
            }
          }, (error)=> {
            this.loginError = ''
          }
        );
    }else {
      this.loginForm.markAllAsTouched();
    }
  }
  closeModal() {
    this.modalService.toggleModal();
  }
}
