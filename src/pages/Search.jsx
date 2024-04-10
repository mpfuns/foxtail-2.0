import React, { useEffect, useState } from 'react';
import { Nav, NotFound, EmptySearch } from '../components';
import axios from 'axios';



const Search = ({searchbar, searchbarHandler}) => {
const [list, setList] = useState([])
  
async function fetchCocktails(){
    
    const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchbar}`);
    
  console.log(data.drinks)
  
  }

  useEffect(() => {
    fetchCocktails();
  }, [searchbar])
  



  return (
    <div className='mx-auto  w-full max-w-7xl'>
    <Nav searchbar={searchbar} searchbarHandler={searchbarHandler} />
   

    {/*  if  searchbar  is not  empty string */}
          {/* loading the search  */}

          {/* if drink  not be found, show  fox sad */}
          <NotFound />
{/* if search is  empty  */}
    {/*  show something  */}
   

    </div>
  )
}

export default Search