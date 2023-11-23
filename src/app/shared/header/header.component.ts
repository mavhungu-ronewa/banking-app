import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLinkActive, RouterLink,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  showMobileMenu: boolean = false;
  public navWidth: any;
  public navHeight: any;

  constructor(

  ) {}

  ngOnInit() {
    /*this.navWidth = window.innerWidth;
    this.navHeight = window.innerHeight;*/
  }

  //@HostListener('window:resize', ['$event'])
  /*onWindowResize() {
    this.navWidth = window.innerWidth;
    this.navHeight = window.innerHeight;
  }*/
}
