import {Driver} from './driver';

export class Order {
  id: number;
  isPreOrder: boolean;
  phoneNumber: string;
  from: string;
  to: string;
  intermediateAddresses: Array<String>;
  description: string;
  appointedСar: Driver;
}
