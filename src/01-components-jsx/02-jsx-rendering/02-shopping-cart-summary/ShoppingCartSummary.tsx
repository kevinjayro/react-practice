export default function ShoppingCartSummary() {
  const productName = 'Mechanical Keyboard';
  const price = 89.99;
  const quantity = 2;
  const discount = 10;
  const subtotal = price * discount;

  return (
    <section>
      <h2>{productName}</h2>
      <p>Unit Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Discount: {discount}%</p>
      <p>Total: ${(subtotal - (subtotal * discount) / 100).toFixed(2)}</p>
    </section>
  );
}
