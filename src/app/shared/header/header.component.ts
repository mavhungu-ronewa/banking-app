import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthenticationService } from "../../authentication/services/authentication.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLinkActive, RouterLink,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  showMobileMenu: boolean = false;
  userIsLoggedIn: boolean = false;
  public navWidth: any;
  public navHeight: any;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    /*this.navWidth = window.innerWidth;
    this.navHeight = window.innerHeight;*/
    this.checkLoginStatus();
  }

  @HostListener('window:resize', ['$event']) onWindowResize() {
    this.navWidth = window.innerWidth;
    this.navHeight = window.innerHeight;
  }

  // Method to check user login status
  checkLoginStatus(): void {
    // Logic to determine user login status and update userIsLoggedIn accordingly
    this.userIsLoggedIn = this.authService.checkLoginStatus();
  }
  checkOut(): void{
    console.log("Check out button...");
  }
  logOut(): void {
    this.authService.logout();
    this.checkLoginStatus();
  }
}
