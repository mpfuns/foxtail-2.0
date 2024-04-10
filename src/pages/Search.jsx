import React from 'react';
import { Nav, NotFound } from '../components';


const Search = ({searchbar, searchbarHandler}) => {
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