import { useState } from 'react';
import SearchInput from './SearchInput';

export default function SearchInputExample() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return <SearchInput value={searchTerm} onChange={handleChange} />;
}
