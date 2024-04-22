'use client';
import { useAuth } from '@/contexts/AuthProvider';
import { getImageUrl } from '@/sanity/sanity.client';
import { ISocial } from '@/types/student.type';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Input, Textarea } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ProfilePage = () => {
   const { user, getProfile } = useAuth();

   useEffect(() => {
      getProfile();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <div className="relative flex flex-col mb-6 w-full max-w-[1000px]">
         <h3 className="text-xl font-bold text-center">Personal profile</h3>
         <Link
            href={'/profile/request'}
            className="z-10 w-fit ml-auto text-black dark:text-white flex items-center gap-3 py-2 rounded-3xl  self-center mt-6 "
         >
            Request Profile
            <ArrowRightIcon className="w-5" />
         </Link>
         <div className="relative flex flex-row align-middle mt-4">
            <div className="flex w-[300px] aspect-square rounded-full overflow-hidden">
               {user?.picture ? (
                  <Image
                     src={getImageUrl(user.picture)!}
                     width={300}
                     height={300}
                     className="object-cover min-w-full"
                     alt="member"
                  />
               ) : (
                  <div className=" w-full aspect-square justify-center flex items-center">
                     <FaUserCircle className=" text-3xl cursor-pointer" />
                  </div>
               )}
            </div>
            <div className="flex flex-col p-3 h-fit  flex-1 gap-4 mt-4">
               <Input.Wrapper label="Names">
                  <Input size="lg" radius="md" width={'100%'} value={user?.names} readOnly />
               </Input.Wrapper>
               <Input.Wrapper label="Promotion">
                  <Input size="lg" radius="md" width={'100%'} value={user?.promotion ?? 'N/A'} readOnly />
               </Input.Wrapper>
               <Input.Wrapper label="Leader Title">
                  <Input size="lg" radius="md" width={'100%'} value={user?.leaderTitle ?? 'N/A'} readOnly />
               </Input.Wrapper>
            </div>
         </div>
         <div className=" mt-4">
            <h3 className="text-lg font-bold">Biography (Bio)</h3>
            <Textarea
               placeholder={'Your Bio will appear here'}
               autosize
               value={user?.bio}
               minRows={2}
               maxRows={4}
               className="mt-4 "
               readOnly
            />
         </div>
         <div className=" mt-6 w-full ">
            <h3 className="text-xl font-bold">Occupations</h3>
            <div className="flex flex-wrap flex-row gap-6  mt-4 items-center align-middle">
               {user?.occupation?.map((occupation) => (
                  <span className=" px-3 py-1 rounded-xl border" key={occupation}>
                     {occupation}
                  </span>
               ))}
               {!user?.occupation && 'N/A'}
            </div>
         </div>
         <div className="mt-6 w-full">
            <h3 className="text-xl font-bold">Contacts</h3>
            <div className="flex flex-wrap gap-6 lg:grid grid-cols-2 w-full items-center border align-middle">
               {Object.keys(user?.socials ?? {}).map((link, i) => {
                  if (link === '_type') return;
                  const social = user?.socials[link as keyof ISocial];
                  console.log('user?.socials', user?.socials);
                  return (
                     <div key={link} className="flex flex-col gap-2 p-2 rounded-sm w-full">
                        <Input.Wrapper label={social?.label}>
                           <Input value={social?.url} size="lg" />
                        </Input.Wrapper>
                     </div>
                  );
               })}
            </div>
            {/* <div>
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
            </div> */}
         </div>
         <div className="w-full flex justify-center">
            <Link
               href={'/profile/request'}
               className="z-10  bg-black flex items-center gap-3 px-5 py-2 rounded-3xl text-white self-center mt-6 "
            >
               Request Profile <ArrowRightIcon className="w-5" />
            </Link>
         </div>
      </div>
   );
};

export default ProfilePage;
