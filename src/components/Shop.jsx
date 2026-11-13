import React from 'react';
import { useState } from 'react';
import FeaturedProducts from "./FeaturedProducts";
import SortDropdown from './SortDropdown';
const Shop = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState("default");
  return (
    <div className='max-w-7xl mx-auto px-6 text-center'>
     
      <h1 className='text-4xl md:text-5xl text-gray-900 font-bold'>Shop All Products</h1>
      <p className='text-base md:text-lg text-gray-500 mt-3'>Explore our complete collection of premium fashion</p>
      <div  className="flex items-center justify-center gap-4 mt-8">
      <input  className=' w-full max-w-md border border-gray-200 px-5 py-3.5 outline-none rounded-xl bg-white text-gray-800 focus:ring-2 focus:ring-gray-800 transition duration-200  placeholder:text-gray-400 shadow-sm focus:outline-none' placeholder='🔍 Search products... ' onChange={(e) => {
       setSearchTerm(e.target.value)
      }}/>
      <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder}/>
      
      </div>
      <div className='max-w-7xl mx-auto flex items-center justify-center mt-8 mb-6'>
        <p className="text-base text-gray-600 font-semibold text-center w-full">
        Showing all products
        </p>
      </div>
      <FeaturedProducts addToCart={props.addToCart} searchTerm={searchTerm} sortOrder={sortOrder} setSortOrder={setSortOrder}/>
    </div>
  );
}

export default Shop;
