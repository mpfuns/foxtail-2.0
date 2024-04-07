import React from 'react';

import {useNavigate} from 'react-router-dom'

const CockktailThumbnails = ({id, name, img, status}) => {
const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center cursor-pointer'onClick={ () => navigate(`/${id}`)} >
    <figure className=' max-w-52 mb-4'><img src={img} alt={name} /></figure>
    <h2 className='font-semibold text-2xl'>{name} </h2>
    <h4><em>{status}</em> </h4>
    </div>
  )
}

export default CockktailThumbnails