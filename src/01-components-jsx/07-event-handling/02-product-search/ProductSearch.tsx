import { useState } from 'react';

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const isEmpty = searchTerm.trim() === '';

  return (
    <section>
      <h2>Product Search</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search products..."
      />
      <p>
        {isEmpty ? 'No search term entered.' : `Search term: ${searchTerm}`}
      </p>
    </section>
  );
}
