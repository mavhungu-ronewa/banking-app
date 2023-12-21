import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { AsideComponent } from "./shared/aside/aside.component";
import { ModalService } from "./authentication/services/modal.service";
import { LoginComponent } from "./authentication/modal/login/login.component";
import { RegistrationComponent } from "./authentication/modal/registration/registration.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, HeaderComponent, FooterComponent, AsideComponent, LoginComponent, RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'banking-app';
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;
  modalOpen: boolean =false;

  constructor(private modalService:ModalService) {
  }

  ngOnInit() {
    this.modalService.getModalStatus().subscribe((status) => {
      this.modalOpen = status;
    });
  }
  openModal() {
    this.modalService.toggleModal();
    console.log("Opening modal");
    this.isMenu = false;
  }
  closeModal() {
    this.modalService.toggleModal();
    console.log("closing modal");
  }

  modalHandler(val: boolean) {
    const modal: HTMLElement | null = document.getElementById("modal");
    const button: HTMLElement | null = document.getElementById("button");

    if (val) {
      modal?.classList.remove("hidden");
      button?.classList.add("hidden");
    } else {
      modal?.classList.add("hidden");
      button?.classList.remove("hidden");
    }
  }
}
