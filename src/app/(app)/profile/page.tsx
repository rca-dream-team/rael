'use client'
import React, { useState,useEffect } from 'react'
import Header from '@/components/shared/Header'
import { useAuth } from '@/contexts/AuthProvider'
import Image from 'next/image'
import { Input } from '@mantine/core'
import PromFilter from '@/components/members/PromFilter'
import { Textarea } from '@mantine/core'



const page = () => {
  const {user}= useAuth()

  return (
    <div classname="relativeflex flex-col">
     
      <h2 className='text-2xl font-bold'>Personal profile</h2> 
      <div className='relative flex flex-row gap-x-20 align-middle mt-4'>
        <Image
          src={user?.picture ? user.picture : '/images/member.png'}
          alt={`${user?.names}'s profile`}
          width={250}
          height={250}
          className='rounded-full object-fit object-cover bg-gray-200'
        />
        <div className='flex flex-col h-fit gap-4 mt-4'>
        <Input size="lg" radius="md" value={user?.names} onChange={null} /> 
        <PromFilter  label='current'/>
        <Input size="lg" radius="md" placeholder={user?.leaderTitle?  user.leaderTitle : "student"}  />
        </div>
      </div>
      <div>
      <Textarea
        label="Description"
        placeholder={user?.bio  ? user?.bio : "Edit your Bio here !                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  "}
        autosize
        minRows={2}
        maxRows={4}
        className='mt-4 ' 
      />
      </div>
      <div className='mt-6'>
        <h2>Occupations</h2>
      </div>
      
    </div>
  )
}

export default page