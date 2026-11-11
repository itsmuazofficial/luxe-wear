import React from 'react';

export default function About() {
  return (
    <div className='max-w-7xl mx-auto px-6 py-16 text-center'>
      <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>About LuxeWear</h1>
      <p className='text-gray-600 text-base md:text-lg mt-4 max-w-3xl mx-auto leading-relaxed'>LuxeWear is a modern clothing brand focused on quality, comfort, and timeless style. We bring you premium fashion for everyday wear.</p>
      <div className='mt-12'>
        <h2 className='text-2xl font-bold text-gray-900'>Our Mission</h2>
        <p className='text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed'>To make quality fashion accessible to everyone by offering stylish, comfortable, and affordable clothing.</p>
      </div>
      <div className='mt-12'>
        <h2 className='text-2xl font-bold text-gray-900'>Our Vision</h2>
        <p className='text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed'>To become a trusted fashion destination where everyone can express their personal style with confidence.</p>
      </div>
      <div className='mt-12'>
        <h2 className='text-2xl font-bold text-gray-900'>Our Values</h2>
        <p className='text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed'>Quality, comfort, and customer satisfaction are at the heart of everything we do.</p>
      </div>
    </div>
  );
}
