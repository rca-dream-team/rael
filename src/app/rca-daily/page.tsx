import PText from '@/components/shared/PoppinText'
import RText from '@/components/shared/RighteousText'
import React from 'react'

const RcaDailyPage = () => {
  return (
    <div className=' w-[80%] '>
      <RText className='text-3xl'>15th March</RText>
      <div className='mt-5'>
        <div className='border border-gray-800 rounded-xl w-full h-fit p-4'>
            <RText className='text-xl'><h2>Nickman Football captain helps the team reach the peace cup finals</h2></RText>
            <PText>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, autem facere atque cum in ipsa mollitia libero amet ratione. Quos enim a voluptatibus nobis voluptates neque accusamus repellendus doloremque</PText>
        </div>
      </div>
    </div>
  )
}

export default RcaDailyPage