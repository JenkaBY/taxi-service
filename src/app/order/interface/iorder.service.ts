import {Observable} from 'rxjs';
import {Order} from '../../shared/model/order';

interface IOrderService {
  takeOrder(order: Order): Observable<Order>;
}

export default IOrderService;
