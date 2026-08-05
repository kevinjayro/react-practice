import OrderHistory from './components/OrderHistory';

const orderList = [
  {
    id: 1,
    productName: 'Mechanical Keyboard',
    quantity: 2,
    price: 120,
    status: 'Delivered',
    orderDate: 'August 3, 2026',
  },
  {
    id: 2,
    productName: 'Wireless Mouse',
    quantity: 1,
    price: 50,
    status: 'Processing',
    orderDate: 'August 5, 2026',
  },
];

export default function OrderHistoryExample() {
  return <OrderHistory orders={orderList} />;
}
