import React, { use } from 'react'
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { Products } = useContext(ShopContext);
    const [bestseller,setBestseller] = useState([]);


    useEffect(() => {
        const filtered = Products.filter((item) => item.bestseller);
        setBestseller(filtered.slice(0, 5)); // First 5 bestsellers
    }, [Products]);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"BEST"} text2={"SELLERS"} />
                <p className='w-3/4 m-auto text-xs sm:text-xs md:text-base text-gray-600'>
                    Explore our best-selling cricket gear and equipment.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
                {bestseller.map((item,index)=>(
                    <ProductItem key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>

        </div>
    )
}

export default BestSeller
