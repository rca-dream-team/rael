import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineBell} from 'react-icons/ai'
import Image from 'next/image'

const 
NavBar = () => {
  return (
    <div className='flex w-full h-[5vh] justify-between border-b border-gray-500'>
        <h2 className=' font-bold text-2xl text-center flex-col flex-1'>RAEL</h2>
        <div className='flex mr-20 gap-4 justify-center'>
            <FaSearch className='flex-col flex-1 text-3xl font-bold'/>
            <AiOutlineBell className='flex-col flex-1 text-4xl'/>
            <Image src={'/user.png'} width={40} height={35} className=' rounded-fulll' alt='profile'/>

        </div>
        
    </div>
  )
}

export default 
NavBar