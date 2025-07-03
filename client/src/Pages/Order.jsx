import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'


const Order = () => {
  const { backendUrl, token, Currency } = useContext(ShopContext);

  const [orderData, setOderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
      if (response.data.success) {
        let allOrdersItem = []
        response.data.order.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)

          })
        })
        setOderData(allOrdersItem.reverse());
        

      }

    } catch (error) {
      toast.error(error.message)
      
    }
  }
    



  useEffect(() => {
    loadOrderData()
  }, [token])
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className=''>
        {
          orderData.map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img src={item.image[0]} alt="" className='w-10 sm:w-20' />
                <div>

                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-3 text-base text-gray'>
                    <p className='text-lg'>{Currency}{item.price}</p>
                    <p>Quantity:{item.quantity}</p>
                    <p></p>Size:{item.size}
                  </div>
                  <p className='mt-2'>Date:<span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                   <p className='mt-2'>Payment : <span className='text-gray-400'>{item.paymentMethod}</span></p>
                </div>

              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm  md:text-base'>{item.status}</p>

                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>TRACK ORDER</button>

              </div>
            </div>
          ))
        }
      </div>


    </div>
  );
};

export default Order;