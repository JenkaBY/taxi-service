import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import IOrderService from './interface/iorder.service';
import {Order} from '../shared/model/order';
import {Number} from '../shared/utils/number';

@Injectable()
export class OrderFakeService implements IOrderService {

  takeOrder(order: Order): Observable<Order> {
    order.id = Number.random(1, 100);
    return of(order);
  }
}
