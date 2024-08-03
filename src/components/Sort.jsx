import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortCriteria } from '../redux/productsSlice';

const Sort = () => {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    dispatch(setSortCriteria(e.target.value));
  };

  return (
    <div className="relative mb-4">
      <select
        className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-md dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:bg-gray-600 dark:focus:border-gray-500"
        onChange={handleSortChange}
      >
        <option value="">Sort by</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-4-4h8z"/></svg>
      </div>
    </div>
  );
};

export default Sort;
