import {Component, Inject, OnInit} from '@angular/core';
import IUserService from '../../user/interface/iuser.service';
import {User} from '../../shared/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  currentUser: User;
  appName = 'Taxi Сервис';
  private todayDate = 'Суббота, 23 марта';
  private timeNow = '18:25';
  imgSrc = {
    clock: './assets/icons/clock.png',
    calendar: './assets/icons/calendar.png',
    email: './assets/icons/email.png'
  };

  constructor(@Inject('userService') private userService: IUserService) {
  }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
  }

  get today(): any {
    return this.todayDate;
  }

  get time(): any {
    return this.timeNow;
  }
}
