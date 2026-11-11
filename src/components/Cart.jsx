import React from "react";
import { Link } from "react-router-dom";
export default function Cart(props) {
  const totalPrice = props.cart.reduce((current, previous) => {
    return current + previous.quantity * previous.price;
  }, 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {props.cart.length === 0 ? (
        <>
          <h1 className="text-3xl font-bold text-gray-700 text-center py-16">
            Your cart is empty
          </h1>
          <div className="flex justify-center">
          <Link to='/shop' className="bg-blue-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-blue-600 font-bold">Continue Shopping</Link>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Your Shopping Cart
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {props.cart.map((product) => {
              return (
                <div
                  key={product.name}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="group overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex justify-between px-3 py-3">
                    <div>
                      <h3 className="text-center font-semibold text-lg tracking-wide">
                        {product.name}
                      </h3>
                      <p className="text-gray-700  text-center mt-2 font-semibold text-lg">
                        Rs. {product.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="py-4 ">
                      <button
                        className="bg-blue-500 px-4  rounded text-white font-bold hover:bg-blue-600"
                        onClick={() => {
                          props.increaseQuantity(product.id);
                        }}
                      >
                        +
                      </button>
                      <button className=" rounded text-black font-bold ml-3 mr-3 ">
                        {product.quantity}
                      </button>
                      <button
                        className="bg-blue-500 px-4  rounded text-white font-bold hover:bg-blue-600 "
                        onClick={() => {
                          props.decreaseQuantity(product.id);
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <button
                    className="bg-blue-500 text-white px-6 py-3 w-full rounded-xl hover:bg-blue-600 active:scale-95 font-bold"
                    onClick={() => {
                      props.removeFromCart(product.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between px-4 py-8 bg-gray-100 rounded-xl shadow-md mt-5 max-w-2xl mr-auto">
            <h3 className="font-bold">Order Summary</h3>
            <p className="font-bold max-w-sm">
              Total Amount = Rs. {totalPrice.toLocaleString()}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
