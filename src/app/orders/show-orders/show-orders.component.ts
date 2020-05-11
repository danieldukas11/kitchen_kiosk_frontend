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
      order.status = 'Pending';
      this.orders.push(order);
      console.log('SOCKET');
      console.log(this.orders);
    });
    console.log(this.orders);
  }

  getOrdersByHttp() {
    this.ordersService.get(this.authUser.id).subscribe(dt => {
      // this.orders = dt;
    });
  }

  prepareStatusClass(order, el = '-order') {
    return order.status.toLowerCase().replace(/ /g, '-') + el;
  }

  ngAfterViewInit() {

  }
}
