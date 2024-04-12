import React from 'react';

import {useNavigate, useLocation} from 'react-router-dom'

const CockktailThumbnails = ({id, name, img, status, setLastPage}) => {
  let location = useLocation();
  let navigate = useNavigate()

  return (
    <div className='flex flex-col items-center cursor-pointer'onClick={ () => {  
      setLastPage(location.pathname)
      navigate(`/${id}`)}} >
    <figure className=' max-w-52 mb-4'><img src={img} alt={name} /></figure>
    <h2 className='font-semibold text-2xl max-w-52 text-center'>{name} </h2>
    <h4><em>{status}</em> </h4>
    </div>
  )
}

export default CockktailThumbnails