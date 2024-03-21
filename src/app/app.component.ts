import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { AsideComponent } from "./shared/aside/aside.component";
import { ModalService } from "./authentication/services/modal.service";
import { LoginComponent } from "./authentication/modal/login/login.component";
import { RegistrationComponent } from "./authentication/modal/registration/registration.component";
import { FlightService } from "./services/flight.service";
import { CartService } from "./services/cart.service";
import { CartComponent } from "./shared/modal/cart/cart.component";
import { AuthenticationService } from "./authentication/services/authentication.service";
import { FiltersComponent } from "./core/component/filters/filters.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, HeaderComponent, FooterComponent, AsideComponent, LoginComponent, CartComponent, RegistrationComponent, FiltersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'banking-app';
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;
  modalOpen: boolean =false;
  cartItemsCount = 0;
  categories: string[] = [];

  constructor(
    private modalService:ModalService,
    private authService: AuthenticationService,
    private productService: FlightService,
    private cartService: CartService
  ) {
  }

  products$ = this.productService.getProducts();
  cartItems$ = this.cartService.getCartItems();
  isLoggedIn$ = this.authService.isLoggedIn$;


  ngOnInit() {
    this.modalService.getModalStatus().subscribe((status) => {
      this.modalOpen = status;
    });
    this.cartService.cartItems$.subscribe(items => {
      this.cartItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
    });
    this.fetchAllCategories();
  }
  openModal() {
    this.modalService.toggleModal();
    this.isMenu = false;
  }
  logout() {
    this.authService.logout();
  }
  closeModal() {
    this.modalService.toggleModal();
  }
  closeMobileModal() {
    this.isMenu = false;
    this.modalService.toggleModal();
  }
  fetchAllCategories(){
    this.productService.getAllProductCategories()
      .subscribe({
        next: (response)=>{
          this.categories = response;
        },
        error: err => {
          console.error(err);
        }
      });
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
  /*Open Cart Modal*/
  openCartModal() {
    this.cartService.openCartModal();
  }
}
