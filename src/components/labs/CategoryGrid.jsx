import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  { name: 'HTML', icon: 'html-icon' },
  { name: 'JavaScript', icon: 'js-icon' },
  { name: 'React', icon: 'react-icon' },
  { name: 'Python', icon: 'python-icon' },
];

function CategoryGrid({ searchTerm }) {
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredCategories.map((category) => (
        <CategoryCard key={category.name} name={category.name} />
      ))}
    </div>
  );
}

export default CategoryGrid;