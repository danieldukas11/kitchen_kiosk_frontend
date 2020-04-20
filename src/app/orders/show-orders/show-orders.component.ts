import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OWL_CAROUSEL_OPTIONS, TEMP_ORDERS} from '../../core/constants/general';
import {Order} from '../../shared/models/Order';
import {OwlOptions} from 'ngx-owl-carousel-o';

declare let $: any;

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.scss']
})
export class ShowOrdersComponent implements OnInit, AfterViewInit {
  orders: Order[] = TEMP_ORDERS;
  owlOptions: OwlOptions = OWL_CAROUSEL_OPTIONS;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.orders)
  }

  prepareStatusClass(order, el = '-order') {
    return order.status.toLowerCase().replace(/ /g, '-') + el;
  }

  ngAfterViewInit() {

  }
}
