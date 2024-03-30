import React from 'react'
import { Nav, DetailsLoading } from '../components'
import { IoArrowBack } from "react-icons/io5";

const CocktailDetails = () => {
  return (
    <div className='mx-auto  w-full max-w-7xl'>
     <Nav/>
    <button className='flex justify-between items-center text-white text-3xl bg-[#E48C4A] px-4 py-2 rounded-full border-solid  border-2 border-black mt-4'> <IoArrowBack/> <h3>Back</h3></button>
    <div className='mt-8 ' >
    <DetailsLoading />


    </div>
    
    </div>
  )
}

export default CocktailDetails