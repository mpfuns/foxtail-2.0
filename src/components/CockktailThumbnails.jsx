import React from 'react';

import {useNavigate, useLocation} from 'react-router-dom';
import { motion } from "framer-motion";

const CockktailThumbnails = ({id, name, img, status, setLastPage, index, loading}) => {
  let location = useLocation();
  let navigate = useNavigate()

  const bigthunbnail ={
    initial: { y: 0, scale:0 }, 
    hover: { y: -5 , scale: 1.1  }
    
  }
  
  
  
  return (
    <motion.div className='flex flex-col items-center'    
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration: 0.5, delay: index* 0.1}}
    >
    <motion.div  whileHover="hover" variants={bigthunbnail} whileTap={{ scale: 0.9 }} className=' flex flex-col items-center'>
    <figure className=' max-w-52 mb-4 cursor-pointer' onClick={ () => {  
      setLastPage(location.pathname)
      navigate(`/${id}`)}} ><img src={img} alt={name} /></figure>
    <motion.h2 className='font-semibold text-2xl max-w-52 text-center cursor-pointer' onClick={ () => {  
      setLastPage(location.pathname)
      navigate(`/${id}`)}} whileHover={{color: "#E48C4A"}}>{name} </motion.h2>
    <h4><em>{status}</em> </h4>
    </motion.div>
    </motion.div>
  )
}

export default CockktailThumbnails