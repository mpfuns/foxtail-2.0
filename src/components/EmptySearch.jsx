import React from 'react'
import { foxhappy } from '../assets'

const EmptySearch = () => {
  return (
    <div  className=' flex flex-col items-center'>
    <h1 className='text-4xl text-center max-w-[560px] mb-6'>Please search a cocktail. </h1>
    <img src={foxhappy} alt="" className='max-w-[450px] h-auto' />
</div>
  )
}

export default EmptySearch