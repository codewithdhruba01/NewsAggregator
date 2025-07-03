import React from 'react'

const CATEGORIES = [
  'Technology', 'Health', 'Sports', 
  'Entertainment', 'Business', 'Science'
]

interface CategoryFilterProps {
  onSelectCategory: (category: string) => void
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onSelectCategory }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {CATEGORIES.map(category => (
        <button 
          key={category}
          onClick={() => onSelectCategory(category.toLowerCase())}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-blue-500 hover:text-white transition-colors"
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter