'use client';
import React from 'react';
import { useAuth } from '@/contexts/AuthProvider';
import Image from 'next/image';
import { Input } from '@mantine/core';
import PromFilter from '@/components/members/PromFilter';
import { Textarea } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import { PlusIcon } from '@heroicons/react/24/outline';
import { FaUpload } from 'react-icons/fa';
import { Button } from '@mantine/core';

const ProfilePage = () => {
   const { user } = useAuth();

   return (
      <div className="relativeflex flex-col mb-6">
         <h3 className="text-xl font-bold">Personal profile</h3>
         <div className="relative flex flex-row gap-x-20 align-middle mt-4">
            <Image
               src={user?.picture ? user.picture : '/images/member.png'}
               alt={`${user?.names}'s profile`}
               width={250}
               height={250}
               className="rounded-full object-fit object-cover bg-gray-200"
            />
            <div className="flex flex-col h-fit gap-4 mt-4">
               <Input size="lg" radius="md" value={user?.names} readOnly />
               <PromFilter label="current" />
               <Input size="lg" radius="md" placeholder={user?.leaderTitle ? user.leaderTitle : 'student'} className="text-sm" />
            </div>
         </div>
         <div>
            <Textarea
               label="Description"
               placeholder={
                  user?.bio
                     ? user?.bio
                     : 'Edit your Bio here !                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  '
               }
               autosize
               minRows={2}
               maxRows={4}
               className="mt-4 "
            />
         </div>
         <div className=" mt-6 ">
            <h3 className="text-xl font-bold">Occupations</h3>
            <div className="flex flex-wrap flex-row gap-6  mt-4 items-center align-middle">
               {user?.occupation ? (
                  <Input size="lg" radius="md" value={user?.names} className="w-[50%] text-sm" />
               ) : (
                  <Input size="lg" radius="md" placeholder={'Add an occupation'} className="w-[50%] text-sm" />
               )}
               <ActionIcon variant="outline" className="rounded-full p-2 text-white bg-gray-400" size={'xl'}>
                  <PlusIcon />
               </ActionIcon>
            </div>
         </div>
         <div className="mt-6">
            <h3 className="text-xl font-bold">Contacts</h3>
            <div className="flex flex-wrap gap-6 p-4 items-center align-middle">
               <div className="flex flex-col gap-2 p-2 border rounded-sm w-[50%]">
                  <div className="flex text-sm gap-4 border-b h-8 items-center align-middle">
                     <p>Link</p>
                     <input
                        type="text"
                        name="link"
                        id=""
                        placeholder="www.example.com"
                        className="outline-none border-l w-full border-black indent-2"
                     />
                  </div>
                  <div className="flex text-sm gap-2 border-b h-8 items-center align-middle">
                     <p>Name</p>
                     <input
                        type="text"
                        name="siteName"
                        id=""
                        value="LinkedIn"
                        className="outline-none border-l w-full border-black indent-2"
                     />
                  </div>
               </div>
               <div className="flex flex-col gap-2 p-2 border rounded-sm w-[50%]">
                  <div className="flex text-sm gap-4 border-b h-8 items-center align-middle">
                     <p>Link</p>
                     <input
                        type="text"
                        name="link"
                        id=""
                        placeholder="www.example.com"
                        className="outline-none border-l w-full border-black indent-2"
                     />
                  </div>
                  <div className="flex text-sm gap-2 border-b h-8 items-center align-middle">
                     <p>Name</p>
                     <input
                        type="text"
                        name="siteName"
                        id=""
                        value="LinkedIn"
                        className="outline-none border-l w-full border-black indent-2"
                     />
                  </div>
               </div>

               <ActionIcon variant="outline" className="rounded-full p-2 text-white bg-gray-400" size={'xl'}>
                  <PlusIcon />
               </ActionIcon>
            </div>
            <div>
               <h3 className="text-xl font-bold ">Other Images</h3>
               <div className="flex items-center align-middle gap-4 cursor-pointer">
                  <div className="flex flex-col p-2 mt-4 border rounded-sm w-[50%] first-letter text-center items-center h-40 justify-center align-middle">
                     <FaUpload />
                     <p>Drag & drop an image</p>
                  </div>
                  <ActionIcon variant="outline" className="rounded-full p-2 text-white bg-gray-400" size={'xl'}>
                     <PlusIcon />
                  </ActionIcon>
               </div>
            </div>
         </div>
         <div className="w-full flex justify-center">
            <Button variant="filled" className="z-10  bg-black text-white self-center mt-6 " size="xl" radius={'xl'}>
               Submit
            </Button>
         </div>
      </div>
   );
};

export default ProfilePage;
