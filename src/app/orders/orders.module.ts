import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { ShowOrdersComponent } from './show-orders/show-orders.component';
import {OwlModule} from 'ngx-owl-carousel';
import {CarouselModule} from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [ShowOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    OwlModule,
    CarouselModule
  ]
})
export class OrdersModule { }
