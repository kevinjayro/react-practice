import { useState } from 'react';
import { initialProducts } from './ShoppingCartSummary.data';
import type { Product } from './ShoppingCartSummary.type';

export default function ShoppingCartSummary() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const taxRate = 0.1;

  const handleChangeQuantity = (id: number, change: number) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item,
      ),
    );
  };

  const totalItems = products.reduce((count, item) => count + item.quantity, 0);

  const subtotal = products.reduce(
    (count, item) => count + item.price * item.quantity,
    0,
  );

  const tax = subtotal * taxRate;

  const total = subtotal + tax;

  return (
    <section>
      <h2>Shopping Cart</h2>
      {products.map(({ id, name, price, quantity }) => (
        <div key={id}>
          <span>{name}</span>
          <button
            onClick={() => {
              handleChangeQuantity(id, -1);
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => {
              handleChangeQuantity(id, 1);
            }}
          >
            +
          </button>
          <span>${price.toFixed(2)}</span>
        </div>
      ))}

      <aside>
        <p>Total items: {totalItems}</p>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <strong>Total: ${total.toFixed(2)}</strong>
      </aside>
    </section>
  );
}
