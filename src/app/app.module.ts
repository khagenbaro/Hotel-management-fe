import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotelComponent } from './hotel/hotel.component';
import { RoomComponent } from './room/room.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HotelserviceComponent } from './hotelservice/hotelservice.component';
import { RoomserviceComponent } from './Service/roomservice/roomservice.component';
import { ReservationserviceComponent } from './Service/reservationservice/reservationservice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HotelComponent,
    RoomComponent,
    ReservationComponent,
    HotelserviceComponent,
    RoomserviceComponent,
    ReservationserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
