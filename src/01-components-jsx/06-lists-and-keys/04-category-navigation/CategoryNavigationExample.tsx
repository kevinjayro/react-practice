import CategoryNavigation from './CategoryNavigation';

const categoriesList = [
  {
    id: 1,
    name: 'Programming',
    items: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: 2,
    name: 'Design',
    items: ['Figma', 'Photoshop', 'Illustrator'],
  },
];

export default function CategoryNavigationExample() {
  return <CategoryNavigation categories={categoriesList} />;
}
