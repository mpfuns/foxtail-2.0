import React from 'react'
import { FaMartiniGlassCitrus } from 'react-icons/fa6'

const DetailsLoading = () => {
  return (
    < div className='flex flex-col items-center d'>
    <div className='flex justify-around items-center '>
        <div className='w-[300px] h-[294px] bg-gray-400 flex justify-center items-center mx-8'>
        <FaMartiniGlassCitrus  className='text-[200px]'/>
        </div>
        <div className='flex  flex-col items-center gap-10'>
            <div className='w-[600px] h-[94px] bg-gray-400'></div>
            <div className='w-[300px] h-[50px] bg-gray-400'></div>
            <div className='w-[400px] h-[200px] bg-gray-400'></div>

        </div>

    </div>
    <div  className='w-[1000px] h-[200px] bg-gray-400 my-8'>


    </div>
    
    </div >
  )
}

export default DetailsLoading