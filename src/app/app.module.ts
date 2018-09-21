import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {UserModule} from './user/user.module';
import {UserFakeService} from './user/user-fake.service';
import {OrderIncomingComponent} from './order/incoming/order.incoming.component';
import {OrdersComponent} from './order/lists/orders/orders.component';
import {MapComponent} from './map/map.component';
import {CarsComponent} from './cars/cars.component';
import {OrderFakeService} from './order/order-fake.service';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderIncomingComponent,
    OrdersComponent,
    MapComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    UserModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: 'userService', useClass: UserFakeService},
    {provide: 'orderService', useClass: OrderFakeService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
