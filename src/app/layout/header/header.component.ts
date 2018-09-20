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
  appName = "Taxi Сервис";
  private todayDate: String;
  private timeNow: String;

  constructor(@Inject('userService') private userService: IUserService) {
  }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
  }

  get today(): any {
    return "Суббота, 23 марта";
  }

  get time(): any {
    return "18:25";
  }
}
