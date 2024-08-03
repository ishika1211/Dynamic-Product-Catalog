import React from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import Sort from '../components/Sort';
import Filter from '../components/Filter';
import DarkModeSwitcher from '../components/darkModeSwitcher';
import Ads from '../components/ads';
import Navbar from '../components/navbar';

const Home = () => {
  return (
    <main className="px-5 sm:px-10 mt-0 bg-blue-50 dark:bg-gray-800">
      <div className="flex justify-between items-center mb-5">
      <h1 className="text-5xl font-extrabold mb-2 mt-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md dark:shadow-lg">
  PRODUCT CATALOG
</h1>

        <DarkModeSwitcher />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/6 order-2 md:order-1">
          <Filter />
        </div>
        <div className="w-full md:w-4/6 order-1 md:order-2">
          <Sort />
          <ProductList />
        </div>
        <div className="w-full md:w-1/6 order-3">
          <SearchBar />
          <Ads />
        </div>
      </div>
    </main>
  );
};

export default Home;
