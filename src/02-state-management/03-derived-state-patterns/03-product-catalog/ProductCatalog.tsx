import { useState } from 'react';
import { products } from './ProductCatalog.data';
import type { Category } from './ProductCatalog.types';

export default function ProductCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    Category | 'All Categories'
  >('All Categories');

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value as Category | 'All Categories');
  };

  const visibleProducts = products.filter((item) => {
    const searchMatch = item.name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());

    const categoryMatch =
      selectedCategory === 'All Categories' ||
      item.category === selectedCategory;

    return searchMatch && categoryMatch;
  });

  const resultCount = visibleProducts.length;

  return (
    <section>
      <h2>Product Catalog</h2>

      <input
        type="search"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchQuery}
      />

      <select onChange={handleSelectCategory} value={selectedCategory}>
        <option value="All Categories">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="office">Office</option>
        <option value="accessories">Accessories</option>
      </select>

      <p>{resultCount} products found</p>
      {resultCount === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {visibleProducts.map(({ id, name, category, price }) => (
            <li key={id}>
              {name} — {category.charAt(0).toUpperCase() + category.slice(1)} —
              ${price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
