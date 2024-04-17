import React from 'react';
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import { motion } from "framer-motion";

const CocktailSkeleton = () => {
 const grayColor=  "linear-gradient(90deg, rgba(150,152,146,1) 8%, rgba(229,231,235,1) 31%, rgba(150,152,146,1) 84%, rgba(150,152,146,1) 100%)"



  return (
    <div className='flex flex-col items-center' >
    <motion.div className='w-[208px] h-[192px] flex justify-center items-center mb-4' 
    style={{backgroundImage: grayColor, backgroundSize:"400%" }}
    /*  keyframes are  need []  for  loading loop*/
    animate={{ backgroundPositionX: [0, 100, 200, 400], transition:{
       repeat: Infinity,
       duration: 1  
    }}}
   
  
  
    >
        <FaMartiniGlassCitrus  className='text-7xl'/>
    </motion.div>

    <motion.div  className='w-[150px] h-[19px] bg-gray-400 ' style={{backgroundImage: grayColor, backgroundSize:"400%" }}
    animate={{ backgroundPositionX: [0, 100, 200, 400], transition:{
       repeat: Infinity,
       duration: 1  
    }}}></motion.div >
    
     </ div>
  )
}

export default CocktailSkeleton