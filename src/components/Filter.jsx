import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilters, setFilters } from '../redux/productsSlice';
import { Button } from 'flowbite-react';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.data.filters);
  const [categories, setCategories] = useState(filters.categories);
  const [priceRange, setPriceRange] = useState(filters.priceRange);
  const [rating, setRating] = useState(filters.rating);

  useEffect(() => {
    setCategories(filters.categories);
    setPriceRange(filters.priceRange);
    setRating(filters.rating);
  }, [filters]);

  const handleApplyFilters = () => {
    dispatch(setFilters({ categories, priceRange, rating }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setCategories([]);
    setPriceRange([0, 1000]);
    setRating(0);
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <h4 className="font-bold mb-2 text-gray-700 dark:text-gray-300">Categories</h4>
        <div className='grid gap-2'>
          {['men\'s clothing', 'women\'s clothing', 'electronics', 'jewelery'].map(category => (
            <label key={category} className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600 h-4 w-4"
                value={category}
                checked={categories.includes(category)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCategories([...categories, category]);
                  } else {
                    setCategories(categories.filter(cat => cat !== category));
                  }
                }}
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-bold mb-2 text-gray-700 dark:text-gray-300">Price Range</h4>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="w-full"
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full"
          />
        </div>
        <div className="mt-2 text-gray-700 dark:text-gray-300">
          <span>${priceRange[0]}</span> - <span>${priceRange[1]}</span>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-bold mb-2 text-gray-700 dark:text-gray-300">Rating</h4>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full"
        />
        <div className="mt-2 text-gray-700 dark:text-gray-300">{rating} stars & up</div>
      </div>

      <div className="flex flex-wrap gap-5 mt-5">
        <Button className="bg-blue-600 text-white py-2 px-4 rounded" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
        <Button className="bg-gray-600 text-white py-2 px-4 rounded" onClick={handleClearFilters}>
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default Filter;
