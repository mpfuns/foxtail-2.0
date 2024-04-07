import React, { useState } from 'react'
import {CockktailThumbnails, CocktailSkeleton, Nav} from "../components"
import { IoSearch } from 'react-icons/io5'
import { foxBar } from '../assets';
import axios from 'axios';
import { useEffect } from 'react';
const Home = () => {

  const [loading, setLoading] = useState();
  const [moment, setMoment] = useState({});

  async function fetchMomentCocktail(){
    setLoading(true);
    const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    
    setMoment(data.drinks[0])
    setLoading(false)
  
  }






  useEffect(() => {
   ;
    fetchMomentCocktail();
    console.log(moment)
    console.log(moment)
    }
  , [])
  



  return (
    <div className='mx-auto  w-full max-w-7xl'>
    <Nav />
    {/* Hook */}
     <div className=' my-8 flex justify-around items-center'>

      <img src={foxBar} alt="" />
      <div className=' flex  flex-col '>
       
        <h1 className='text-4xl text-center italic font-bold '>Unleash Your Inner Mixologist: </h1>
         <br></br>
        <h1 className='text-4xl text-center  italic font-bold '>Craft Your Perfect Cocktail! </h1>
        <br></br>
        {/* seach bar   */}
        <div className='flex items-center justify-center bg-white rounded-full px-2 border-solid  border-2 border-black py-4'>
            <input type="text" placeholder='Search cocktail' className=' text-3xl border-none outline-none' />
            <button>
            <IoSearch className=' text-6xl' />
            </button>
          </div>
      </div>
     </div>
     {/* Drinks */}
      <div className='mx-auto  w-full max-w-7xl flex justify-around items-start mb-8'>

        <div className='flex flex-col items-center'>
          <h2 className='text-3xl text-center  font-bold mb-2 '>Cocktail of the Moment </h2>
          {loading? (<CocktailSkeleton />): (<CockktailThumbnails key={moment.idDrink} id={moment.idDrink} name={moment.strDrink} img={moment.strDrinkThumb} status={moment.
strAlcoholic} />)}
          

        </div>
        <div className='flex flex-col items-center'>
        <h2 className='text-3xl text-center  font-bold mb-2 '>Cocktail Special</h2>
        <CocktailSkeleton />

        </div>


      </div>
    </div>
  )
}

export default Home