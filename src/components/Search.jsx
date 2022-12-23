import React from 'react';
import { GoLocation } from 'react-icons/go';
import { GoSearch } from 'react-icons/go';
const Search = () => {
  return (
    <>
      <div className='flex w-full justify-between'>
        <GoLocation className="text-white text-xl" />
        <input type="text" id="cityName" name="cityName" className='cityName' />
        <GoSearch className="text-white text-xl cursor-pointer" />
      </div>
    </>
  );
};

export default Search;
