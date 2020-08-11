import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HARDCODED_ORDER, OWL_CAROUSEL_OPTIONS, TEMP_ORDERS} from '../../core/constants/general';
import {Order} from '../../shared/models/Order';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {WebSocketService} from '../../core/services/websocket.service';
import {OrdersService} from '../../core/services/orders.service';
import * as jwtDecode from 'jwt-decode';

declare let $: any;

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.scss']
})
export class ShowOrdersComponent implements OnInit, AfterViewInit {
  // orders: any = HARDCODED_ORDER;
  orders: any = [];
  owlOptions: OwlOptions = OWL_CAROUSEL_OPTIONS;
  authUser;

  constructor(
    private webSocketService: WebSocketService,
    private ordersService: OrdersService
  ) {
    const token = localStorage.getItem('token');
    if (token) {
      this.authUser = jwtDecode(token).data;
    }
  }

  ngOnInit(): void {
    this.getOrdersByHttp();
    this.webSocketService.on('get_order').subscribe((order: any) => {
      this.orders.push(order);
    });
  }

  getOrdersByHttp() {
    this.ordersService.get().subscribe(dt => {
      this.orders = dt;
    });
  }

  prepareStatusClass(order, el = '-order') {
    return order.status.toLowerCase().replace(/ /g, '-') + el;
  }

  changeStatus(order) {
    if (order.status === 'pending') {
      order.status = 'cooking';
    } else if (order.status === 'cooking') {
      order.status = 'ready';
    } else {
      order.status = 'picked-up';
    }
    console.log(order.status + '_order');
    this.webSocketService.emit(order.status + '_order', order);
  }

  ngAfterViewInit() {

  }
}
