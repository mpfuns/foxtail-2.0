import React, { useEffect } from 'react'
import { imageBg, Logo } from '../assets';
import { IoSearch } from "react-icons/io5";

import  {useLocation, useNavigate,useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = ({searchbar, searchbarHandler}) => {


let location = useLocation ();
  let navigate = useNavigate();
  const {id} =useParams();

const buttonPress ={
  initial: { y: 0, boxShadow: '0px 14px 5px rgba(0, 0, 0, 0.75)' }, 
  hover: { y: 5 , boxShadow: 'none' }
}




  return (
    <>
     <div className='bg-gray-200 relative '>
       <div className='   h-auto  w-full'>
       <img src={imageBg} alt=""  className='w-full h-full object-contain absolute blur-[1.5px] - '/>
       </div>
        
        <div className='flex justify-between items-center md:mx-4 max-sm:flex-col  '>
          <img src={Logo} alt="" className="  object-contain max-w-[220px] h-auto z-10 "  />
          <div className='z-10 mr-10 flex flex-col  items-center max-sm:mb-6  max-sm:mr-0'>
          <div className=' flex justify-between mb-10  '>
           
            {location.pathname === "/search" || id ? (<motion.button className='text-2xl bg-white px-4 py-2 rounded-full  mx-2 ' whileHover="hover"  variants={buttonPress} whileTap={{ scale: 0.9 }} style={{boxShadow: '0px 14px 5px rgba(0, 0, 0, 0.75)' }} onClick={() => navigate('/')} >Home</motion.button>) : ""}
            {location.pathname === "/" || id ? (<motion.button className='text-2xl bg-white px-4 py-2 rounded-full mx-2 ' whileHover="hover"  variants={buttonPress} whileTap={{ scale: 0.9 }} style={{boxShadow: '0px 14px 5px rgba(0, 0, 0, 0.75)' }} onClick={() => navigate('/search')}>Find Cocktail </motion.button>) : ""}
           
            
          </div>
          {/* Searchbar and state  if on  seach page  */}

          {location.pathname === "/search" && ( 
          <div className='flex items-center justify-center bg-white rounded-full max-w-60 m-auto border-solid  border-2 border-black py-2 px-2'>
            <input type="text" placeholder='Search cocktail' className=' text-base border-none outline-none' value={searchbar}  onChange={searchbarHandler}/>
           
            <IoSearch className=' text-xl' />
            
          </div> 
        ) }

         

          </div>
         
          
         
        </div>

        </div>

    </>
  )
}

export default Nav