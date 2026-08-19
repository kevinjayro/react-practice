import type { ReactNode } from 'react';
import type { ListItem } from '../types/type';

type ListProps = {
  items: ListItem[];
  renderItem: (item: ListItem) => ReactNode;
};

export default function List({ items, renderItem }: ListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
