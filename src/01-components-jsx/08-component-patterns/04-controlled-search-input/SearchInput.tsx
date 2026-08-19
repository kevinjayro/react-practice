import type { ChangeEvent } from 'react';

type SearchInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <section>
      <label htmlFor="search">Search products</label>

      <input id="search" value={value} onChange={onChange} />

      <p>Searching for: {value}</p>
    </section>
  );
}
