import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalService } from "../../services/modal.service";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { Router, RouterLink } from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink ],
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
    password: ['',Validators.required],
    username: ['', [Validators.required]],
  });
  ngOnInit() {
    this.modalService.showModal$.subscribe((value)=> {
      this.showModal = value;
    });
    this.authService.loginSuccess$.subscribe(()=>{
      this.modalService.toggleModal();
    })
  }

  onSubmit() {
    if(this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.authService.login(loginData);
      this.loginForm.reset();
        /*.subscribe({
          next: (result)=>{
            console.log(result);
            this.loginForm.reset();
            this.modalService.toggleModal();
            this.authService.LoggedIn(true);
            this.authService.userIsLoggedIn = true;
            this.router.navigate(['/']);
          },*/
          /*error: (error: HttpErrorResponse)=>{
            if(error instanceof ErrorEvent){
              console.error('An error occurred', error.error.message);
            }else {
              console.error(`${error.status}, error message : ${error.message}`);
            }
          }*/
       /* })*/
        /*.subscribe((success)=>{
            if(success) {
              this.loginForm.reset();
              this.router.navigate(['/home']);
            }
            else {
              this.loginError = '';
            }
          }, (error)=> {
            this.loginError = ''
          }
        );*/
    }else {
      this.loginForm.markAllAsTouched();
    }
  }
  closeModal() {
    this.modalService.toggleModal();
  }
}
