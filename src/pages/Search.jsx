import React, { useEffect, useState } from 'react';
import { Nav, NotFound, EmptySearch, CocktailSkeleton, CockktailThumbnails } from '../components';
import axios from 'axios';

import  { useNavigate } from "react-router-dom"

const Search = ({searchbar, searchbarHandler, setLastPage}) => {
const [currentList, setCurrentList] = useState([]);
const [oldList, setOldList] = useState([]);
const [filterMenu, setFilterMenu] = useState("DEFAULT")
 const [loading, setLoading] = useState(); 
 
let navigate = useNavigate();

  
async function fetchCocktails(){
   
  setFilterMenu("DEFAULT")
    setLoading(true)
    const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchbar}`);
     const  sortDrinks= data.drinks?.sort(function(a, b) {
      let textA = a.strDrink.toUpperCase();
      let textB = b.strDrink.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    
  
    setCurrentList(sortDrinks)
    setOldList(sortDrinks)
    
      setLoading(false)
  
  }

  useEffect(() => {
  
    fetchCocktails();
   
    
  }, [searchbar])
  /*  function  
        filter 
            all --  set  current to  old  
             non (Non alcoholic and Optional alcohol ) --  run do the  function 
             alchol (alcoholic  and  Optional alcohol ) -- run do the  function 
  */
  
 function  filterCocktail (filter){
  console.log("here" )
    if( filter === "DEFAULT"){
      /* show all */
      setLoading(true)
      setFilterMenu("DEFAULT")
         setCurrentList(oldList)
         setLoading(false)
    }
    else if(filter === "NON_ALCOHOLIC"){
      setLoading(true)
       setFilterMenu("NON_ALCOHOLIC")
      let non= oldList.filter((drink)=> drink.strAlcoholic !== "Alcoholic")
      setCurrentList(non)
      setLoading(false)
      
        

    }
    else if(filter === "ALCOHOLIC"){
      setLoading(true)
      setFilterMenu("ALCOHOLIC")
      let alc =  oldList.filter((drink)=> drink.strAlcoholic !=="Non alcoholic")
      setCurrentList(alc)
      setLoading(false)
    }


 }


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
{/*  filter  set up options and  selection   */}

{searchbar !== "" && (
  <div className=' mt-4 flex justify-end items-center mr-6'>
  <select id="filter"  value={filterMenu} onChange={(event)=> filterCocktail(event.target.value)} >
        <option value="DEFAULT" >All</option>
        <option value="NON_ALCOHOLIC">Non Alcoholic</option>
        <option value="ALCOHOLIC">Alcoholic</option>
    </select>
</div>
)}


   <div className={searchbar!== ""? " grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]   gap-6 items-start justify-start my-8 mx-auto "  :"mt-8"}  >
  




    {searchbar === ""? (<EmptySearch />) 
          : loading? 
          new  Array(12).fill(0).map((_, index) => (<CocktailSkeleton />)) : 
          currentList? 
      (currentList.map( (drink, index) => (<CockktailThumbnails key={drink.idDrink} id={drink.idDrink} name={drink.strDrink} img={drink.strDrinkThumb} status={drink.
strAlcoholic} setLastPage={setLastPage}  index={index}/>))) 
:(<NotFound />)}




</div>


<div className='flex justify-center my-8'>
{searchbar && currentList?.length >= 9 ?(<button  onClick={()=> window.scrollTo(0, 0)}> Back to top </button>) :("")}
</div>
    </div>
  )
}

export default Search