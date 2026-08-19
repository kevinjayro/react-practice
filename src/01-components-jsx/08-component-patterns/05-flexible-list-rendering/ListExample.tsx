import List from './components/List';
import { technologies } from './data/technologies';

export default function ListExample() {
  return (
    <List items={technologies} renderItem={(technology) => technology.name} />
  );
}
