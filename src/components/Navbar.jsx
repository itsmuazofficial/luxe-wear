import React, { useState } from "react";
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" sticky top-0 z-50 h-16 flex items-center justify-between  bg-white text-black border-b-gray-200 border-b px-6 ">
      <div className="text-2xl font-bold  flex items-center ">LUXEWEAR</div>
      <button
        className="md:hidden text-2xl text-gray-700 p-2 cursor-pointer"
        onClick={() => {
         setMenu(!menu)
        }}
      >
        ☰
      </button>
      <div className={`${menu ? "flex" : "hidden"} items-center gap-6  md:flex absolute top-16 left-0 w-full flex-col md:flex-row bg-white shadow-md p-4 md:static md:w-auto md:shadow-none md:p-0 z-50`}>
   
        <Link className="text-lg font-medium text-gray-600 hover:text-black transition-colors" to="/">
          Home
        </Link>
        <Link className="text-lg font-medium text-gray-600 hover:text-black transition-colors" to="/shop">
          Shop
        </Link>
        <Link className="text-lg font-medium text-gray-600 hover:text-black transition-colors" to="/categories">
          Categories
        </Link>
        <Link className="text-lg font-medium text-gray-600 hover:text-black transition-colors" to="/about">
          About
        </Link>
        <Link className="text-lg font-medium text-gray-600 hover:text-black transition-colors" to="/contact">
          Contact
        </Link>
        <Link className="text-lg font-medium text-gray-600 hover:text-black transition-colors" to="/cart">
        🛒Cart {props.cart.length}
        </Link>
      </div>
    </div>
  );
}
