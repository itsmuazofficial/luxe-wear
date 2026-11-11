import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import FeaturedProducts from "./components/FeaturedProducts";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Categories from "./components/Categories";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  const [cart, setCart] = useState([]);

  //    Add to Cart function 

  function addToCart(product) {
    const alreadyAdded = cart.some((item) => {
     return product.name === item.name
    })
    if(alreadyAdded){
      alert('This item is already added')
      return
    }
    const newProduct = {
      ...product,
      id: crypto.randomUUID(),
      quantity: 1,
    };
    setCart((prevCart) => {
      return [newProduct, ...prevCart];
    });
  }

  //    Remove From Cart 

  function removeFromCart(productId) {
    setCart((prevCart) => {
      return prevCart.filter((product) => {
        return productId !== product.id;
      });
    });
  }

  //    increase function quantity 

  function increaseQuantity(productIdReceive) {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productIdReceive) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  }

  //    decrease quantity function 

  function decreaseQuantity (productIdReceive) {
 setCart((prevCart) => {
  return prevCart.map((item) => {
    if(item.id === productIdReceive){
      return {
        ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 
      }
    }
    return item
  })
 })
  }
  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedProducts addToCart={addToCart} />
            </>
          }
        />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
