import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; 

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const Currency = "$";
  const Delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [Search, setSearch] = useState('');
  const [ShowSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState(''); 
  const navigate = useNavigate();
  const [Products, setProducts] = useState([]);


  const handleSetToken = (t) => {
    setToken(t);
    if (t) {
      try {
        const decoded = jwtDecode(t);
        setUserId(decoded.id); 
      } catch {
        setUserId('');
      }
    } else {
      setUserId('');
    }
  };

  const addToCart = async (itemId, size) => {
    if (!size) { toast.error('Select Product Size'); return; }
    let cartData = structuredClone(cartItems);
    if (!cartData[itemId]) cartData[itemId] = {};
    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    setCartItems(cartData);
    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } });
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems)
      for (const size in cartItems[itemId])
        if (cartItems[itemId][size] > 0) totalCount += cartItems[itemId][size];
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      let itemInfo = Products.find((p) => p._id === item);
      if (!itemInfo) continue;
      for (const size in cartItems[item])
        if (cartItems[item][size] > 0)
          totalAmount += itemInfo.price * cartItems[item][size];
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) setProducts(response.data.products);
      else toast.error(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getUserCart = async (t) => {
    try {
      const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token: t } });
      if (response.data.success) setCartItems(response.data.cartData);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => { getProductsData(); }, []);

  
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (!token && savedToken) {
      handleSetToken(savedToken);
      getUserCart(savedToken);
    }
  }, []); 

  const value = {
    Products, Currency, Delivery_fee,
    Search, setSearch, ShowSearch, setShowSearch,
    cartItems, addToCart, getCartCount, updateQuantity, getCartAmount,
    navigate, backendUrl,
    token, setToken: handleSetToken, 
    setCartItems, userId,
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;