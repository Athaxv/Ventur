import React from "react";

interface Category {
  id: string;
  label: string;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition
            ${
              selectedCategory === category.id
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-muted text-muted-foreground hover:bg-accent dark:hover:bg-neutral-700"
            }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
