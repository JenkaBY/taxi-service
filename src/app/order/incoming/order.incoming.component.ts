import {Component, Inject, OnInit} from '@angular/core';
import {Order} from '../../shared/model/order';
import {FormControl, FormGroup} from '@angular/forms';
import IOrderService from '../interface/iorder.service';

@Component({
  selector: 'app-order-incoming',
  templateUrl: './order.incoming.component.html',
  styleUrls: ['./order.incoming.component.css']
})
export class OrderIncomingComponent implements OnInit {
  title = 'Входящий заказ';
  private order: Order;
  orderForm: FormGroup;

  constructor(@Inject('orderService') orderService: IOrderService) {
  }

  ngOnInit() {
    this.initFormGroup();
  }

  private initFormGroup(): void {
    const formControl = {
      isPreOrder: new FormControl(false),
      phoneNumber: new FormControl(''),
      from: new FormControl(''),
      to: new FormControl(''),
      intermediateAddresses: new FormControl(''),
      description: new FormControl('')
    };
    this.orderForm = new FormGroup(formControl);
  }

}
