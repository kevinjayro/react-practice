type Order = {
  id: number;
  productName: string;
  quantity: number;
  price: number;
  status: string;
  orderDate: string;
};

type OrderHistoryProps = {
  orders: Order[];
};

export default function OrderHistory({ orders }: OrderHistoryProps) {
  return (
    <section>
      <h2>Order History</h2>
      {orders.map(({ id, productName, quantity, price, status, orderDate }) => (
        <article key={id}>
          <h3>{productName}</h3>
          <p>Quantity: {quantity}</p>
          <p>Price: ${price}</p>
          <p>{status}</p>
          <span>{orderDate}</span>
        </article>
      ))}
    </section>
  );
}
