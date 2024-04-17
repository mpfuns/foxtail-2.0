import React, { useState, useEffect } from 'react'
import {CockktailThumbnails, CocktailSkeleton, Nav} from "../components"
import { IoSearch } from 'react-icons/io5'
import { foxBar, foxtailImg } from '../assets';
import axios from 'axios';    
import { motion } from "framer-motion"
import  { useNavigate } from "react-router-dom"

import foxtailData from '../assets/foxtailData';

const Home = ({searchbar, searchbarHandler, setLastPage }) => {

  let navigate = useNavigate();

  const [loading, setLoading] = useState();
  const [fakeLoading, setFakeLoading] = useState(true);
  const [moment, setMoment] = useState({});

  async function fetchMomentCocktail(){
    setLoading(true);
    const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    
    setMoment(data.drinks[0])
    setLoading(false)
  
  }








  useEffect(() => {
   
    fetchMomentCocktail();
   
   setTimeout(() => {
    setFakeLoading(false)
   }, 1000);


    
    }
  , [])
  



  return (
    <div className='mx-auto  w-full max-w-7xl'>
    <Nav />
    {/* Hook */}
     <div className=' my-8 flex justify-around items-center flex-col max-sm:flex-col-reverse  lg:flex-row'>

      <img src={foxBar} alt="" />
      <div className=' flex  flex-col '>
       
        <h1 className='text-4xl text-center italic font-bold '>Unleash Your Inner Mixologist: </h1>
         <br></br>
        <h1 className='text-4xl text-center  italic font-bold '>Craft Your Perfect Cocktail! </h1>
        <br></br>
        {/* seach bar   */}
        <div className='flex items-center justify-between bg-white rounded-full px-2 border-solid  border-2 border-black  max-w-lg max-sm:hidden '>
            <input type="text" placeholder='Search cocktail' className=' text-xl border-none outline-none lg:text-3xl'  value={searchbar} onChange={searchbarHandler} />
            <motion.button whileHover={{ scale: 1.1, color:"#E48C4A" }} whileTap={{ scale: 0.9 }}  onClick={ () => navigate("/search")} >
            <IoSearch className='text-5xl mr-2' />
            </motion.button>
          </div>
      </div>
     </div>
     {/* Drinks */}
      <div className='mx-auto  w-full max-w-7xl flex justify-around flex-row items-start mb-8  max-sm:items-center  max-sm:flex-col  '>

        <div className='flex flex-col items-center mb-8 '>
          <h2 className='text-3xl text-center  font-bold mb-6 '>Cocktail of the Moment </h2>
          {loading? (<CocktailSkeleton />): (<CockktailThumbnails key={moment.idDrink} id={moment.idDrink} name={moment.strDrink} img={moment.strDrinkThumb} status={moment.
strAlcoholic} setLastPage={setLastPage} index={1} />)}
          

        </div>
        <div className='flex flex-col items-center'>
        <h2 className='text-3xl text-center  font-bold mb-6 '>Cocktail Special</h2>

        {fakeLoading? ( <CocktailSkeleton />) : (<CockktailThumbnails key={foxtailData[0].idDrink} id={foxtailData[0].idDrink} name={foxtailData[0].strDrink} img={foxtailImg} status={foxtailData[0].strAlcoholic} setLastPage={ setLastPage} index={2} />)}
       
        </div>
       
      </div>
    </div>
  )
}

export default Home