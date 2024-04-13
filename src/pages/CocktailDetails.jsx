import React, { useEffect, useState } from 'react'
import { Nav, DetailsLoading } from '../components'
import { IoArrowBack } from "react-icons/io5";
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';

import foxtailData from '../assets/foxtailData';
import { foxtailImg } from '../assets';

const CocktailDetails = ({lastPage}) => {
   const [content, setContent] = useState()
  let navigate = useNavigate();
  const {id} =useParams();


  async function fecthCocktailDetails(){
      if (id === "4.4"){
        setContent(foxtailData[0])

      } else{
        const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)

        console.log(data.drinks[0])
        setContent(data.drinks[0])
      }



    

  }

useEffect(() => {
  fecthCocktailDetails();

}, [])




  return (
    /*  need   animation for button , but  might not need it  for  content */
    <div className='mx-auto  w-full max-w-7xl'>
      <Nav/>
      <button className='flex justify-between items-center text-white text-3xl bg-[#E48C4A] px-4 py-2 rounded-full border-solid  border-2 border-black mt-4' onClick={()=> navigate(lastPage)}> <IoArrowBack/> <h3>Back</h3></button>
      <div className='mt-8 ' >
        {content? 
 
              (
                <div className='flex flex-col  '>
                  <div className='flex  items-center justify-around mb-8 '>
                    <figure className=' max-w-80  mb-4'><img src={id==="4.4"? foxtailImg :content.strDrinkThumb} alt={content.strDrink} /></figure>
                    <div className='flex  flex-col items-center gap-10'>
                         <div  className='flex flex-col items-center gap-2.5 '>
                              <h1 className='text-5xl font-semibold'>{content.strDrink}</h1>
                              <h3 className=' text-2xl  italic'>{content.strAlcoholic}</h3>
                        </div>
                        <h2 className=' text-3xl'>{content.strGlass} is needed</h2>
                        <div> 
                            <h3 className=' text-2xl font-bold mb-2'>Ingredients</h3>
                               <ul className=' text-xl  '>
                                  {content.strIngredient1 && <li>{content.strIngredient1}  {content.strMeasure1}</li>}
                                  {content.strIngredient2 && <li>{content.strIngredient2}  {content.strMeasure2}</li>}
                                  {content.strIngredient3 && <li>{content.strIngredient3}  {content.strMeasure3}</li>}
                                  {content.strIngredient4 && <li>{content.strIngredient4}  {content.strMeasure4}</li>}
                                  {content.strIngredient5 && <li>{content.strIngredient5}  {content.strMeasure5}</li>}
                                  {content.strIngredient6 && <li>{content.strIngredient6}  {content.strMeasure6}</li>}
                                  {content.strIngredient7 && <li>{content.strIngredient7}  {content.strMeasure7}</li>}
                                  {content.strIngredient8 && <li>{content.strIngredient8}  {content.strMeasure8}</li>}
                                  {content.strIngredient9 && <li>{content.strIngredient9}  {content.strMeasure9}</li>}
                                  {content.strIngredient10 && <li>{content.strIngredient10} {content.strMeasure10}</li>}
                                  {content.strIngredient11 && <li>{content.strIngredient11}  {content.strMeasure11}</li>}
                                  {content.strIngredient12 && <li>{content.strIngredient12}  {content.strMeasure12}</li>}
                                  {content.strIngredient13 && <li>{content.strIngredient13}  {content.strMeasure13}</li>}
                                  {content.strIngredient14 && <li>{content.strIngredient14}  {content.strMeasure14}</li>}
                                  {content.strIngredient15 && <li>{content.strIngredient15}  {content.strMeasure15}</li>}
                               </ul>
                        </div>
    

                    </div>
                  </div>
                
                  <p className=' text-center text-2xl max-w-3xl mx-auto mb-8'>{content.strInstructions}</p>
                

                </div>
  
  
 ) 
 
 
 
 : ( <DetailsLoading />)}

      </div>
    </div>
  )
}

export default CocktailDetails