import React from 'react'
import { imageBg, Logo } from '../assets';
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


const Nav = () => {
  return (
    <>
     <div className='bg-gray-200 relative  '>
       <div className='   h-auto  w-full'>
       <img src={imageBg} alt=""  className='w-full h-full object-contain absolute blur-[1.5px] - '/>
       </div>
        
        <div className='flex justify-between items-center mx-4 '>
          <img src={Logo} alt="" className="  object-contain w-[220px] h-auto z-10 "  />
          <div className='hidden md:block z-10 mr-10 '>
          <div className=' flex justify-between mb-10'>
            <button className='text-2xl bg-white px-4 py-2 rounded-full drop-shadow-[0_14px_5px_rgba(0,0,0,0.75)] mx-2 ' >Home</button>
            <button className='text-2xl bg-white px-4 py-2 rounded-full drop-shadow-[0_14px_5px_rgba(0,0,0,0.75)] mx-2 '>Find Cocktail </button>
          </div>
          {/* Searchbar and state  if on  seach page  */}
          <div className='flex items-center justify-center bg-white rounded-full max-w-60 m-auto border-solid  border-2 border-black py-2'>
            <input type="text" placeholder='Search cocktail' className=' text-base border-none outline-none' />
            <button>
            <IoSearch className=' text-xl' />
            </button>
          </div>

          </div>
          <div className='block z-10 mr-10 md:hidden'>
            <GiHamburgerMenu className=' text-6xl' />
          </div>
          
         
        </div>

        </div>

    </>
  )
}

export default Nav