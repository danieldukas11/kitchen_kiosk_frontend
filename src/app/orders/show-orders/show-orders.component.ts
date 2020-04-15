import {Component, OnInit} from '@angular/core';
import {TEMP_ORDERS} from '../../core/constants/general';
import {Order} from '../../shared/models/Order';

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.scss']
})
export class ShowOrdersComponent implements OnInit {
  orders: Order[] = TEMP_ORDERS;

  constructor() {
  }

  ngOnInit(): void {
  }

  prepareStatusClass(order, el = '-order') {
    return order.status.toLowerCase().replace(/ /g, '-') + el;
  }
}
