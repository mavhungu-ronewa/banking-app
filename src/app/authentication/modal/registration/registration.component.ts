import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ModalService } from "../../services/modal.service";
import { AuthenticationService } from "../../services/authentication.service";
//import { passwordMatchValidator } from "../../services/password-match.validator";


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {

  showRegisterModal: boolean = false;
  //registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private authService: AuthenticationService,
  ) {}

  registerForm = this.fb.nonNullable.group({
      email: ['',[ Validators.required]],
      password: ['', [ Validators.required, Validators.minLength(6)]],
      verifyPassword: ['', Validators.required]
    }
  );

  ngOnInit(){
    this.modalService.showModal$.subscribe((value)=> {
      this.showRegisterModal = value;
    });
  }

  get f() { return this.registerForm.controls; }
  register() {
    if (this.registerForm.invalid) {
      // Handle registration logic here
      return;
    }
  }

  closeRegisterModal() {
    this.modalService.toggleModal();
  }

}
