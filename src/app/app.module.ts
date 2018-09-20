import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import {UserModule} from './user/user.module';
import {UserFakeService} from './user/user-fake.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    UserModule
  ],
  providers: [
    {provide: 'userService', useClass: UserFakeService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
