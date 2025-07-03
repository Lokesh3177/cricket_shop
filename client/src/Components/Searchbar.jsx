import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
  const { Search, setSearch, ShowSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [Visible, setVisible] = useState(false);

  useEffect(() => {
   if(location.pathname.includes('/collection')) {
     setVisible(true);
   }
   else{
    setVisible(false);
   }
  },[location])

  return ShowSearch && Visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
          <input value={Search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search..' className='flex-1 outline-none bg-inherit text-sm' />
            <img src={assets.search}  alt="" className='w-4'/>      
        </div>
        <img onClick={() => setShowSearch(false)} src={assets.cross} alt="" className='inline w-3 cursor-pointer' />

    </div>
  ):null;
}

export default Searchbar;
 