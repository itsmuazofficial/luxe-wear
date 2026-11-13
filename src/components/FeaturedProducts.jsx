import React from "react";
import { useState } from "react";
export default function FeaturedProducts(props) {
  const products = [
    {
      name: "T-shirt",
      price: 2499,
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
      badge: "NEW ARRIVAL"
    },
    {
      name: "Hoodie",
      price: 4499,
      img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
      badge :"BESTSELLER"
    },
    {
      name: "Jeans",
      price: 5599,
      img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
      badge : "SALE"
    },
    {
      name: "Casual Shirt",
      price: 2999,
      img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600",
      badge : "TRENDING"
    },
    {
      name: "Red Sneakers",
      price: 5499,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
      badge : "LIMITED EDITION"
    },
    {
      name: "Leather Jacket",
      price: 7999,
      img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
      badge : "PREMIUM"
    },
  ];
   const filterProducts = products.filter((product) => {
   return  product.name.toLowerCase().includes(props.searchTerm||"".toLowerCase())
   })
   let sortProducts = [...filterProducts]
  if(props.sortOrder=== "low"){
   sortProducts.sort((a,b) => {
    return a.price - b.price
  })
  }
   if(props.sortOrder=== "high"){
   sortProducts.sort((a,b) => {
    return b.price - a.price
  })
  }
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        Featured Products
      </h2>
      <p className="text-gray-500 text-center mt-2">
        Explore our latest collection of premium fashion
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {sortProducts.map((product, index) => {
          return (
            <div key={index}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden  hover:shadow-lg transition-all">
                <div className=" group overflow-hidden relative">
                 {product.badge  && <span className={` ${product.badge==='SALE'?'bg-red-600':product.badge==="BESTSELLER"?'	bg-amber-500':product.badge === "NEW ARRIVAL"?'bg-blue-600':product.badge==='TRENDING'?'bg-purple-600':product.badge==='LIMITED EDITION'?'bg-emerald-600':'bg-black'} ${product.badge ==='BESTSELLER'?'text-black':'text-white'} absolute top-3 left-3 rounded-full shadow-md text-xs font-semibold px-2 py-1.5 tracking-wider`}>
                    {product.badge}
                   </span>}
                  <img
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    src={product.img}
                  />
                </div>
                <div className="p-4 ">
                  <h3 className="text-center font-semibold text-lg tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-gray-700  text-center mt-2 font-semibold text-lg">
                    Rs. {product.price.toLocaleString()}
                  </p>
                  <button
                    className="w-full bg-black text-white py-3 rounded-md mt-4 hover:bg-gray-800 transition-colors duration-300 active:scale-95"
                    onClick={() => {
                      props.addToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
