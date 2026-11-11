import React from 'react';

export default function Hero() {
  return (
    
    <div className='max-w-7xl mx-auto px-6 min-h-screen grid md:grid-cols-2 items-center gap-12'>
      <div>
      <h1 className='text-4xl font-bold text-gray-900 md:text-6xl leading-tight'>Discover Your Style</h1>
      <p className='text-base md:text-lg text-gray-600 mt-4'>Premium fashion designed for your everyday lifestyle.</p>
      <button className='mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all hover:scale-105'>Shop Now</button>
      </div>
      <div>
        <img className='rounded-2xl w-full h-auto shadow-lg'  src='https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800' alt='Fashion model wearing modern clothing'/>
      </div>
    </div>
  );
}
