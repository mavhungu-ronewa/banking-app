import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ModalService } from "../../services/modal.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  showModal: boolean = false;
  constructor(private modalService:ModalService) {}
 /* modalHandler(val: boolean) {
    const modal: HTMLElement | null = document.getElementById("modal");
    const button: HTMLElement | null = document.getElementById("button");
    //var me : HTMLElement|null = document.getElementById("me");
    if (val) {
      modal?.classList.remove("hidden");
      button?.classList.add("hidden");
    } else {
      modal?.classList.add("hidden");
      button?.classList.remove("hidden");
    }
  }*/

  ngOnInit() {
    this.modalService.showModal$.subscribe((value)=> {
      this.showModal = value;
    });
  }
  closeModal() {
    //this.modalService.closeModal();
    this.modalService.toggleModal();
    console.log("We are closing modal");
  }
}
