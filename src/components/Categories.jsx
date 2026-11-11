import React from 'react';
import {Link} from 'react-router-dom'
export default function Categories() {
  return (
    <div className='max-w-7xl mx-auto px-6 py-16'>
      <h1 className='text-3xl md:text-4xl font-bold text-center'>Categories</h1>
      <p className='font-semibold text-center text-gray-500 mt-3'>Explore our collection by category</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
        <Link to="/shop">
       <div className='bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition duration-300 hover:-translate-y-1'>
        <img  className='w-full h-40 object-cover rounded-lg' src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600' alt='T-shirts'/>
        <h2 className='text-lg font-semibold text-gray-800 mt-4'>T-shirts</h2>
       </div>
       </Link>
       <Link to="/shop">
        <div className='bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition duration-300 hover:-translate-y-1'>
           <img  className='w-full h-40 object-cover rounded-lg' src='https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600' alt='Hoodies'/>
        <h2 className='text-lg font-semibold text-gray-800 mt-4'>Hoodies</h2>
       </div>
       </Link>
       <Link to="/shop">
        <div className='bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition duration-300 hover:-translate-y-1'>
           <img  className='w-full h-40 object-cover rounded-lg' src='https://images.unsplash.com/photo-1542272604-787c3835535d?w=600' alt='Jeans'/>
        <h2 className='text-lg font-semibold text-gray-800 mt-4'>Jeans</h2>
       </div>
       </Link>
       <Link to="/shop">
        <div className='bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition duration-300 hover:-translate-y-1'>
           <img  className='w-full h-40 object-cover rounded-lg' src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600' alt='Shoes'/>
        <h2 className='text-lg font-semibold text-gray-800 mt-4'>Shoes</h2>
       </div>
       </Link>
       <Link to="/shop">
         <div className='bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition duration-300 hover:-translate-y-1'>
           <img  className='w-full h-40 object-cover rounded-lg' src='https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600' alt='Casual Shirts'/>
        <h2 className='text-lg font-semibold text-gray-800 mt-4'>Casual Shirts</h2>
       </div>
       </Link>
       <Link to="/shop">
         <div className='bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition duration-300 hover:-translate-y-1'>
           <img  className='w-full h-40 object-cover rounded-lg' src='https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600' alt='Leather Jacket'/>
        <h2 className='text-lg font-semibold text-gray-800 mt-4'>Leather Jacket</h2>
       </div>
       </Link>
      </div>
    </div>
  );
}
