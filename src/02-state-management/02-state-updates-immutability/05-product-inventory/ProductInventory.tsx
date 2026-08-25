import { useState } from 'react';
import { products as initialProducts } from './ProductInventory.data';
import type { Product } from './ProductInventory.type';

export default function ProductInventory() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleChangeStock = (id: number, change: number) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, stock: Math.max(item.stock + change, 0) }
          : item,
      ),
    );
  };

  const handleChangeFeatured = (id: number) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, featured: !item.featured } : item,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const totalProducts = products.length;

  const featuredProducts = products.reduce(
    (count, item) => (item.featured ? count + 1 : count),
    0,
  );
  return (
    <section>
      <h2>Product Inventory</h2>
      <ul>
        {products.map(({ id, name, price, stock, featured }) => (
          <li key={id}>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Stock: {stock}</p>
            <p>Featured: {featured ? 'Yes' : 'No'}</p>

            <button
              onClick={() => {
                handleChangeStock(id, 1);
              }}
            >
              Increase Stock
            </button>

            <button
              onClick={() => {
                handleChangeStock(id, -1);
              }}
            >
              Decrease Stock
            </button>

            <button
              onClick={() => {
                handleChangeFeatured(id);
              }}
            >
              Toggle Featured
            </button>

            <button
              onClick={() => {
                handleDelete(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <p>Total Products: {totalProducts}</p>
      <p>Featured Products: {featuredProducts}</p>
    </section>
  );
}
