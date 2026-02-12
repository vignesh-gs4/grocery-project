import React, { createContext, useContext, useEffect, useState } from 'react'
import { data, useNavigate } from 'react-router-dom';
import { dummyProducts } from '../assets/assets';
import toast from 'react-hot-toast';
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

console.log("base url : ",import.meta.env.VITE_BACKEND_URL);

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const currency = "$";
  // console.log("currency : ", currency);

  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({})

  //Fetch Seller States
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      // console.log(data);
      if(data.success) {
        setIsSeller(true);
      } else {
        setIsSeller(false);
      }
    } catch(err) {
      console.log(err.message);
      setIsSeller(false);
    }
  };

  //fetch all products
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('/api/product/list');

      if(data.success) {
        setProducts(data.products)
      } else {
        toast.error(data.message);
      }

    } catch(err) {
      toast.error(data.message);
        console.log("error fetching product : ", err.message);
    }
  }

  // fetchProducts();

  // console.log("products : ", products)

  //add product to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
    toast.success("Added to Cart");
  };


  //update cart item quantity
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    console.log(cartData[itemId]);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  }

  //remove product from cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    toast.success("Removed from Cart");
    setCartItems(cartData);
  }

  //get cart item count
  const getCartCount = () => {
    let totalCount = 0;
    for(const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  }

  //get cart total amount
  const getCartAmount = () => {
    let totalAmount = 0;
    for(const items in cartItems) {
      let itemInfo = products.find(product => product._id === items);
      if(cartItems[items] > 0) {
        totalAmount += itemInfo.offerPrice * cartItems[items];
      }
    }

    return Math.floor(totalAmount * 100) / 100;
  }


  useEffect(() => {
    // console.log("================================================");
    fetchProducts();
    fetchSeller();
  }, []);

  const value = {
    navigate,
    user, setUser,
    isSeller, setIsSeller,
    showUserLogin, setShowUserLogin,
    products, currency,
    addToCart, updateCartItem, removeFromCart,
    cartItems, searchQuery, setSearchQuery,
    getCartAmount, getCartCount, axios, fetchProducts
  };


  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};