import { Routes } from '@angular/router';
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { HotelBookingComponent } from "./core/component/hotel-booking/hotel-booking.component";
import { FlightBookingComponent } from "./core/component/flight-booking/flight-booking.component";
import { RideBookingComponent } from "./core/component/ride-booking/ride-booking.component";
import { HomeComponent } from "./core/component/home/home.component";

export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  { path: 'auth', loadChildren: ()=> import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'home', component: HomeComponent },
  { path: 'flights', component: FlightBookingComponent },
  { path: 'hotels', component: HotelBookingComponent },
  { path: 'rides', component: RideBookingComponent },
  { path: '**', component: PageNotFoundComponent }
];
