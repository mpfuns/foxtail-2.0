import React from 'react'
import { FaMartiniGlassCitrus } from 'react-icons/fa6'
import { motion } from "framer-motion";

const DetailsLoading = () => {
  const grayColor=  "linear-gradient(90deg, rgba(150,152,146,1) 8%, rgba(229,231,235,1) 31%, rgba(150,152,146,1) 84%, rgba(150,152,146,1) 100%)"
  

  return (
    
    < div className='flex flex-col items-center '>
     <div className='flex justify-around items-center max-md:flex-col '>
        <motion.div className='w-[300px] h-[294px] flex justify-center items-center mx-8 mb-4'
         style={{backgroundImage: grayColor, backgroundSize:"400%" }}
         animate={{ backgroundPositionX: [0, 100, 200, 400], transition:{
            repeat: Infinity,
            duration: 1  
         }}}
        
        >
        <FaMartiniGlassCitrus  className='text-[200px]'/>
        </motion.div>
        <div className='flex  flex-col items-center gap-10'>
            <motion.div className='w-[600px] h-[94px] max-md:w-[300px]'
              style={{backgroundImage: grayColor, backgroundSize:"400%" }}
              animate={{ backgroundPositionX: [0, 100, 200, 400], transition:{
                 repeat: Infinity,
                 duration: 1  
              }}}
            ></motion.div>
            <motion.div className='w-[300px] h-[50px]  max-md:w-[150px]'
            style={{backgroundImage: grayColor, backgroundSize:"400%" }}
            animate={{ backgroundPositionX: [0, 100, 200, 400], transition:{
               repeat: Infinity,
               duration: 1  
            }}}
            >
            </motion.div>
            <motion.div className='w-[400px] h-[200px] max-md:w-[300px]'
              style={{backgroundImage: grayColor, backgroundSize:"400%" }}
              animate={{ backgroundPositionX: [0, 100, 200, 400], transition:{
                 repeat: Infinity,
                 duration: 1  
              }}}
            ></motion.div>

        </div>

     </div>
      <motion.div  className='w-[1000px] h-[200px] my-8 max-md:w-[600px] max-sm:w-[300px]'
        style={{backgroundImage: grayColor, backgroundSize:"400%" }}
        animate={{ backgroundPositionX: [0, 100, 200, 400], transition:{
           repeat: Infinity,
           duration: 1  
        }}}
      >
      </motion.div>
    
    </div >
  )
}

export default DetailsLoading