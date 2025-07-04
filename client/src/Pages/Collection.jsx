import React, { use, useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';

function Collection() {
  const { Products, Search, ShowSearch } = useContext(ShopContext);
  const [ShowFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));

    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  }
  const togglesubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));

    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const sortProducts = () => {
    let fpcopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpcopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpcopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilters();
        break;
    }
  }

  const applyFilters = () => {
    let ProductsCopy = Products.slice();
    if (ShowSearch && Search) {
      ProductsCopy = ProductsCopy.filter(item => item.name.toLowerCase().includes(Search.toLowerCase()));
    }
    if (category.length > 0) {
      ProductsCopy = ProductsCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      ProductsCopy = ProductsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(ProductsCopy);

  }


  useEffect(() => {
    applyFilters();
  }, [category, subCategory, Search, ShowSearch,Products])
  // Initial sort when component mounts
  useEffect(() => {
    sortProducts();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-10 pt-10 border-t'>

      {/* Filter options */}
      <div className='min-w-60'>
         <div className=" w-60 text-sm italic text-gray-600 mb-6 px-2 sm:px-0">
            “I believe in giving more than 100% on the field, and I don't really worry about the result if there's great commitment on the field.” – <strong>MS Dhoni</strong>
          </div>
       
        <p onClick={() => setShowFilter(!ShowFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        <img src={assets.drop_down_icon} alt="" className={`h-3 sm:hidden ${ShowFilter ? 'rotate-90' : ''}`} />
        {/* Categories filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ShowFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm mb-3 font-medium'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700' >
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bats'} onChange={togglecategory} /> Bats
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Gloves'} onChange={togglecategory} /> Gloves
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Pads'} onChange={togglecategory} /> Pads
            </p>


          </div>

        </div>
        {/* sub categories filters */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${ShowFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm mb-3 font-medium'>Sub Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700' >
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bats'} onChange={togglesubCategory} /> Bats
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Batting Gloves'} onChange={togglesubCategory} /> Batting Gloves
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Batting Pads'} onChange={togglesubCategory} /> Batting Pads
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Keeper Pads'} onChange={togglesubCategory} /> Keeper Pads
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Keeper Gloves'} onChange={togglesubCategory} /> Keeper Gloves
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Batting Helmets'} onChange={togglesubCategory} /> Batting Helmets
            </p>


          </div>

        </div>
        

      </div>
      {/* Right side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>

          <Title text1={'ALL'} text2={'PRODUCTS'} />
          
          {/* product sort*/}
          <select onChange={(e) => setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relevant">sort:Relevance</option>
            <option value="low-high">sort: Low to High</option>
            <option value="high-low">sort: High to Low</option>
          </select>
        </div>
        {/* map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-7'>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }

        </div>

      </div>
    </div>



  );
}

export default Collection
