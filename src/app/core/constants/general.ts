import {OwlOptions} from 'ngx-owl-carousel-o';
import {environment} from '../../../environments/environment';

export const TEMP_ORDERS = [
  {
    name: 'Order #1',
    status: 'Pending',
  },
  {
    name: 'Order #1',
    status: 'Pending',
  },
  {
    name: 'Order #1',
    status: 'Pending',
  },
  {
    name: 'Order #1',
    status: 'Pending',
  },
  {
    name: 'Order #1',
    status: 'Pending',
  },
  {
    name: 'Order #1',
    status: 'Pending',
  },
  {
    name: 'Order #1',
    status: 'Pending',
  },
  {
    name: 'Order #1',
    status: 'Pending',
  },
  {
    name: 'Order #1',
    status: 'Pending',
  },
  {
    name: 'Order #2',
    status: 'Under construction'
  },
  {
    name: 'Order #3',
    status: 'Pick-up'
  },
  // {
  //   name: 'Order #4',
  //   status: 'Picked-up'
  // }
];


export const OWL_CAROUSEL_OPTIONS: OwlOptions = {
  loop: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  nav: false,
  navSpeed: 700,
  margin: 20,
  startPosition: 8,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 3
    }
  },
};
export const API_URL = environment.url;
