import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { HotelBookingComponent } from "./core/component/hotel-booking/hotel-booking.component";
import { FlightBookingComponent } from "./core/component/flight-booking/flight-booking.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HotelBookingComponent, FlightBookingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'banking-app';
}
