import React, { useEffect } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Verify = () => {
  const { token, setCartItems, backendUrl, userId } = useContext(ShopContext); 
  const [searchparams] = useSearchParams();
  const navigate = useNavigate();

  const success = searchparams.get('success');
  const orderId = searchparams.get('orderId');

  const verifyPayment = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + '/api/order/verifyStripe',
        { success, orderId, userId }, 
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        navigate('/orders');
      } else {
        navigate('/cart');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
      navigate('/cart');
    }
  };

  
  useEffect(() => {
    if (token) verifyPayment();
  }, [token]); 

  return (
    <div className='flex justify-center items-center min-h-[60vh]'>
      <p className='text-lg'>Verifying payment... Please wait</p>
    </div>
  );
};

export default Verify;