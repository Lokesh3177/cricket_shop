import React, { use } from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useState, useEffect } from 'react';
import ProductItem from '../Components/ProductItem';
import { assets } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { Products, Currency,addToCart } = useContext(ShopContext);
  const [ProductData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [Size, setSize] = useState('');
  const fetchProductData = async () => {
    Products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image);
        
        return null;
      }
    });

  }


  useEffect(() => {
    fetchProductData();
  }, [productId, Products]);


  return ProductData ? (
    <div className='border-t pt-10 transition-opacity ease-in-out duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product images */}
        <div className='flex-1 flex  flex-cols-reverse  gap-3 sm:flex-row'>
          <div className='flex sm: flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {ProductData.image.map((item, index) => (
              <img src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' />
            ))}
          </div>
          <div className='w-full sm:w-[81.3%]'>
            <img src={image} alt="" className='w-130  object-cover rounded-lg border' />

          </div>

        </div>
        {/* Product details */}
        <div className='flex-1 '>
          <h1 className='font-medium text-2xl mt-2'>{ProductData.name}</h1>
          <div className='flex items-center gap-2 mt-2'>
            <img src={assets.star} alt="" className="w-3 5" />
            <img src={assets.star} alt="" className="w-3 5" />
            <img src={assets.star} alt="" className="w-3 5" />
            <img src={assets.star} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>

          </div>
          <p className='mt-5 text-3xl font-medium'>{Currency}{ProductData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{ProductData.description}</p>
          <div className='flex flex-cl=ol gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {ProductData.sizes.map((size, index) => (
                <button onClick={() => setSize(size)} key={index} className={`border py-2 px-4 bg-gray-100 ${Size === size ? 'border-orange-500' : ''} rounded-md hover:bg-gray-200 transition-colors ease-in-out duration-300`}>
                  {size}
                </button>
              ))}

            </div>

          </div>
          <button onClick={()=>addToCart(ProductData._id,Size)} className='bg-black text-white py-3 px-8 text-sm active:bg-gray-700 '>Add TO Cart</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product</p>
            <p>Cash on Delivery Not Available for this Product</p>
            <p>Fast Delivery</p>
            <p className='text-gray-500 text-sm italic mt-2 '>
             “Self-belief and hard work will always earn you success.” – <strong>Virat Kohli</strong>
            </p>

          </div>
        </div>

      </div>
      {/* Description And Review Section */}
      <div className='mt-20'>
        <div className='flex '>
          <p className='border px-5 py-3 text-sm'>Description</p>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
          

        </div>
        <div className='flex flex-col gap-5 border px-6 py-6 text-sm text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos laboriosam laudantium ratione eius voluptatem ipsam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nobis dolore voluptatibus eum voluptas quas, assumenda itaque quis dolor enim.</p>


        </div>

      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product


