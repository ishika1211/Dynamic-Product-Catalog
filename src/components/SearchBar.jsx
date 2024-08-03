import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/productsSlice';
import { Input } from "@material-tailwind/react";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="flex-1 w-full mb-5 bg-inherit">
      <Input 
      placeholder='Search your products...' 
      onChange={handleSearch}/>
    </div>
    
  );
};

export default SearchBar;
