import React, { createContext, useState } from "react";
import { toast } from "react-toastify";


// a context
export const AddToCartContext = createContext();

const CartProvider = ({ children }) => {
  // useState()
  const [products, setProducts] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // function for adding to cart
  const addToCart = (product) => {
    setProducts((prevItems) => {
      toast.success(`${product.product_title} added to cart list`);
      return [...prevItems, product]; // Add the product to the cart
    });
  };

  // function for removing from cart
  const removeFromCart = (productId) => {
    setProducts((prevItems) => {
      return prevItems.filter((product) => product.product_id !== productId); // Remove the product from the cart
    });
  };

  const addToFavorites = (product) => {
    setProducts((prevProduct) => {
      if (!prevProduct.find((item) => item.product_id === product.product_id)) {
        toast.success(`${product.product_title} added to Favorite`);
        return [...prevProduct, product]; 
      } else {
        toast.error(`${product.product_title} already exists in the favorite`);
        return prevProduct; 
      }
    });
  };


  const removeFromFavorite = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product.product_id !== productId); 
    });
  };
  return (
    <AddToCartContext.Provider value={{ products, setProducts, addToCart, removeFromCart, addToFavorites, }}>
      {children}
    </AddToCartContext.Provider>
  );
};

export default CartProvider;
