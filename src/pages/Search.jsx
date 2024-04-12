import React, { useEffect, useState } from 'react';
import { Nav, NotFound, EmptySearch, CocktailSkeleton, CockktailThumbnails } from '../components';
import axios from 'axios';



const Search = ({searchbar, searchbarHandler, setLastPage}) => {
const [list, setList] = useState([]);
 const [loading, setLoading] = useState(); 
  
async function fetchCocktails(){
    setLoading(true)
    const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchbar}`);
     const  sortDrinks= data.drinks?.sort(function(a, b) {
      let textA = a.strDrink.toUpperCase();
      let textB = b.strDrink.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    
  //console.log(sortDrinks.length %2)
    setList(sortDrinks)
    
      setLoading(false)
  
  }

  useEffect(() => {
    fetchCocktails();
    
  }, [searchbar])
  



  return (
    <div className='mx-auto  w-full max-w-7xl'>
    <Nav searchbar={searchbar} searchbarHandler={searchbarHandler} />

{/* If searchbar is  empty string === show something 
    if  search  is have something in  string 
        if loading 
            show loading 

        if not loading  show  results 
            if data found  === show it 
            if  data not found === not found page

*/}
   <div className={searchbar!== ""? " grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]   gap-6 items-start justify-start my-8 mx-auto "  :"mt-8"}  >
  
    {searchbar === ""? (<EmptySearch />) 
          : loading? 
          new  Array(12).fill(0).map((_, index) => (<CocktailSkeleton />)) : 
    list? 
      (list.map( drink => (<CockktailThumbnails key={drink.idDrink} id={drink.idDrink} name={drink.strDrink} img={drink.strDrinkThumb} status={drink.
strAlcoholic} setLastPage={setLastPage} />))) 
:(<NotFound />)}

</div>



         

          



   

    </div>
  )
}

export default Search