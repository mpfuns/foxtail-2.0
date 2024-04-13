import React from 'react';
import { FaMartiniGlassCitrus } from "react-icons/fa6";

const CocktailSkeleton = () => {
    /*  animation of loading  with infinity loop */
  return (
    <div className='flex flex-col items-center' >
    <div className='w-[208px] h-[192px] bg-gray-400 flex justify-center items-center mb-4'>
        <FaMartiniGlassCitrus  className='text-7xl'/>
    </div>

    <div className='w-[150px] h-[19px] bg-gray-400 '></div>
    
     </ div>
  )
}

export default CocktailSkeleton