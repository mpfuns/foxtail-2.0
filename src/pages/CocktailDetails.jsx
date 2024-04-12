import React, { useEffect } from 'react'
import { Nav, DetailsLoading } from '../components'
import { IoArrowBack } from "react-icons/io5";
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';

const CocktailDetails = ({lastPage}) => {

  let navigate = useNavigate();
  const {id} =useParams();


  async function fecthCocktailDetails(){
    const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)

    console.log(data)

  }

useEffect(() => {
  fecthCocktailDetails();

}, [])




  return (
    <div className='mx-auto  w-full max-w-7xl'>
     <Nav/>
    <button className='flex justify-between items-center text-white text-3xl bg-[#E48C4A] px-4 py-2 rounded-full border-solid  border-2 border-black mt-4' onClick={()=> navigate(lastPage)}> <IoArrowBack/> <h3>Back</h3></button>
    <div className='mt-8 ' >
    <DetailsLoading />


    </div>
    
    </div>
  )
}

export default CocktailDetails