import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import CategoryCard from './CategoryCard';

const categories = [
  { name: 'HTML' },
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'Python' },
];

function CategoryGrid({ searchTerm }) {
  // Filter categories based on the searchTerm
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
      {filteredCategories.map((category) => (
        <CategoryCard key={category.name} name={category.name} />
      ))}
    </SimpleGrid>
  );
}

export default CategoryGrid;
