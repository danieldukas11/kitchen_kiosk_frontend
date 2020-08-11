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
// export const SOCKET_CONFIG = {
//   url: `64.225.3.114/`, options: {
//     query: `ns=5e006191363b1b1dd14e4f49`,
//     resource: 'solo'
//   }
// };

export const SOCKET_CONFIG = {
  url: `localhost/`, options: {
    query: `ns=5e006191363b1b1dd14e4f49`,
    resource: 'solo'
  }
};


export const HARDCODED_ORDER = [
  {
    orderedProducts: [
      {
        _id: '5e42a004adeaf97c365658ba',
        sizes: [{title: 'Small', price: '1.95', qty: 2}, {title: 'Large', price: '2.95', qty: 0}],
        orders: 0,
        title: 'Water on Ice',
        customizable: false,
        sizable: true,
        user_id: '5e006191363b1b1dd14e4f49',
        __v: 0,
        image: 'image-1583826520537.png',
        price: 2.95,
        hidden: false,
        order: 1001,
        specifications: [],
        ingredients: [],
      }
    ],
    special_instructions: '',
    alergy_info: '',
    subTotal: 3.9,
    tax: 0.195,
    tip: 0,
    total: 4.095,
    status: 'Pending'
  }
];
