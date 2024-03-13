'use client'
import React, { useState,useEffect } from 'react'
import Header from '@/components/shared/Header'
import { useAuth } from '@/contexts/AuthProvider'
import Image from 'next/image'
import { Input } from '@mantine/core'
import PromFilter from '@/components/members/PromFilter'
import { Textarea } from '@mantine/core'
import { ActionIcon } from '@mantine/core'
import { PlusIcon } from '@heroicons/react/24/outline'



const page = () => {
  const {user}= useAuth()

  return (
    <div classname="relativeflex flex-col mb-6">
     
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
        <Input size="lg" radius="md" placeholder={user?.leaderTitle?  user.leaderTitle : "student"}  className='text-sm' />
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
          <h2 className='text-2xl font-bold'>Occupations</h2>
          <div className='flex flex-row gap-6 align-middle mt-4'>
            {user?.occupation? (
              <Input size="lg" radius="md" value={user?.names} onChange={null} className='w-[50%]' className='text-sm'/> 
              ):(
            
              <Input size="lg" radius="md" placeholder={'Add an occupation'} onChange={null} className='w-[50%]' className='text-sm' /> 
            )}
            <ActionIcon variant="outline">
                <PlusIcon/> 
            </ActionIcon>
          </div>
        </div>
        <div className='mt-6'>
          <h2 className='text-2xl font-bold'>Contacts</h2>
          <div className='flex gap-6 p-4'>
              <div className='flex flex-col gap-2 p-2 border rounded-sm w-[50%]'>
                 <div className='flex text-sm gap-4 border-b h-8 align-middle'>
                  <p>Link</p> 
                  <input type="text" name="link" id="" placeholder='www.example.com' className='outline-none border-l w-full border-black indent-2'/>
                 </div>
                 <div className='flex text-sm gap-2 border-b h-8 align-middle'>
                  <p>Name</p> 
                  <input type="text" name="siteName" id="" Value='LinkedIn' className='outline-none border-l w-full border-black indent-2'/>
                 </div>
              </div>
              <div className='flex flex-col gap-2 p-2 border rounded-sm w-[50%]'>
                 <div className='flex text-sm gap-4 border-b h-8 align-middle'>
                  <p>Link</p> 
                  <input type="text" name="link" id="" placeholder='www.example.com' className='outline-none border-l w-full border-black indent-2'/>
                 </div>
                 <div className='flex text-sm gap-2 border-b h-8 align-middle'>
                  <p>Name</p> 
                  <input type="text" name="siteName" id="" Value='LinkedIn' className='outline-none border-l w-full border-black indent-2'/>
                 </div>
              </div>

              <ActionIcon variant="outline">
                <PlusIcon/> 
            </ActionIcon>

              
          </div>
          <div>
            <h2 className='text-2xl font-bold'>Other Images</h2>
          </div>
        </div>
      </div>
      
    
  )
}

export default page