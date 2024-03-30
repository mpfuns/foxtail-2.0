import React from 'react'
import { imageBg, Logo } from '../assets'


const Nav = () => {
  return (
    <>
     <div className='bg-gray-200 relative mx-auto  w-full max-w-7xl '>
       <div className='   h-auto  w-full'>
       <img src={imageBg} alt=""  className='w-full h-full object-contain absolute blur-[1.5px] - '/>
       </div>
        
        <div className='flex justify-between items-center mx-4 '>
          <img src={Logo} alt="" className="  object-contain w-[220px] h-auto z-10 "  />
          <div className='z-10 mr-10'>
          <div className=' flex justify-between'>
            <button className='text-2xl bg-white px-4 py-2 rounded-full drop-shadow-[0_14px_5px_rgba(0,0,0,0.75)] mx-2 ' >Home</button>
            <button className='text-2xl bg-white px-4 py-2 rounded-full drop-shadow-[0_14px_5px_rgba(0,0,0,0.75)] mx-2 '>Find Cocktail </button>
          </div>
          {/* Searchbar and state  if on  seach page  */}

          </div>
       
          
         
        </div>

        </div>

    </>
  )
}

export default Nav