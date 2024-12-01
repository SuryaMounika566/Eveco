import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
const SearchBar = () => {

    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);



  return showSearch?(
    <div className='border-t border-b bg-gray-50 text-center'>
        <div>
            </div>
      
    </div>
  ) : null 
}

export default SearchBar
