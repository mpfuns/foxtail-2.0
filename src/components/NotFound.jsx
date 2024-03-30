import React from 'react'
import { foxSad } from '../assets'

const NotFound = () => {
  return (
    <div  className=' flex flex-col items-center mt-8'>
        <h1 className='text-4xl text-center max-w-[560px] mb-6'>Sorry can’t find  the cocktail  you  are  looking  for, please search a  different  drink. </h1>
        <img src={foxSad} alt="" className='max-w-[450px] h-auto' />
    </div>
  )
}

export default NotFound