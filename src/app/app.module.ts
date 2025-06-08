import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { GrabComponent } from './grab/grab.component';
import { ViewticketComponent } from './viewticket/viewticket.component';
import { JourneytktComponent } from './journeytkt/journeytkt.component';
import { QrbookingComponent } from './qrbooking/qrbooking.component';
import { QuicktktComponent } from './quicktkt/quicktkt.component';
import { PlatformtktComponent } from './platformtkt/platformtkt.component';
import { SeasontktComponent } from './seasontkt/seasontkt.component';
import { CanceltktComponent } from './canceltkt/canceltkt.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { RwalletComponent } from './rwallet/rwallet.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    GrabComponent,
    ViewticketComponent,
    JourneytktComponent,
    QrbookingComponent,
    QuicktktComponent,
    PlatformtktComponent,
    SeasontktComponent,
    CanceltktComponent,
    BookinghistoryComponent,
    RwalletComponent,
    ProfileComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
