import IUserService from './interface/iuser.service';
import {Injectable} from '@angular/core';
import {User} from '../shared/model/user';
import {Observable, of} from 'rxjs';

@Injectable()
export class UserFakeService implements IUserService {
private user: User;

  getCurrentUser(): Observable<User> {
    if (this.user == null){
      this.user =  new User();
      this.user.firstName = "Мария";
      this.user.lastName = "Константинопольская";
      this.user.image_url = "https://static-eu.insales.ru/images/products/1/892/81044348/%D0%BC%D0%B0%D1%80%D0%B8%D1%8F_%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2_%D1%80%D0%B0%D0%BC%D0%B5.jpg";
    }
    return of(this.user);
  }

}
