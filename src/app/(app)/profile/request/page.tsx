'use client';
import { OCCUPATIONS } from '@/app/(utils)/constants';
import PromFilter from '@/components/members/PromFilter';
import AsyncSelect from '@/components/profile/AsyncSelect';
import { useAuth } from '@/contexts/AuthProvider';
import { getImageUrl } from '@/sanity/sanity.client';
import { ISocial } from '@/types/student.type';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Button, Input, MultiSelect, Textarea } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ProfileRequestPage = () => {
   const { user } = useAuth();
   const [profileData, setProfileData] = React.useState({
      occupation: user?.occupation,
      leaderTitle: user?.leaderTitle,
      bio: user?.bio,
      socials: user?.socials,
   });

   const handleSocialChange = (social: keyof ISocial, value: string) => {
      const newSocials = structuredClone(profileData.socials);
      if (!newSocials) return;
      newSocials[social].url = value;
      setProfileData({ ...profileData, socials: newSocials });
   };

   console.log('profileData', profileData);

   useEffect(() => {
      setProfileData({
         occupation: user?.occupation,
         leaderTitle: user?.leaderTitle,
         bio: user?.bio,
         socials: user?.socials,
      });
   }, [user]);

   return (
      <div className="relativeflex flex-col mb-6 w-full max-w-[1000px]">
         <Link href={'/profile'} className="z-10 w-fit text-black flex items-center gap-3 py-2 rounded-3xl  self-center mt-6 ">
            <ArrowLeftIcon className="w-5" />
            View Profile
         </Link>
         <h3 className="text-xl font-bold text-center">Request profile</h3>
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
               <PromFilter size="lg" label="current" value={user?.promotion!} />
               <Input.Wrapper label="Leader Title">
                  <AsyncSelect
                     query="*[_type=='leaderTitle']"
                     labelKey="title"
                     size="lg"
                     px={0}
                     value={user?.leaderTitle ?? ''}
                     accessorKey="title"
                     onChange={(value) => {
                        console.log('value', value);
                        setProfileData({ ...profileData, leaderTitle: value });
                     }}
                     placeholder="Select title"
                     variant="default"
                  />
               </Input.Wrapper>
            </div>
         </div>
         <div>
            <Textarea
               label="Description"
               placeholder={'Edit your Bio here ! '}
               autosize
               value={user?.bio}
               minRows={2}
               onChange={(e) => setProfileData({ ...profileData, bio: e.currentTarget.value })}
               maxRows={4}
               className="mt-4 "
            />
         </div>
         <div className=" mt-6 w-full ">
            <h3 className="text-xl font-bold">Occupations</h3>
            <div className="flex flex-wrap flex-row gap-6  mt-4 items-center align-middle">
               <MultiSelect
                  data={OCCUPATIONS}
                  placeholder="Select your occupation"
                  value={profileData.occupation}
                  className="w-[100%]"
                  size="lg"
                  onChange={(value) => {
                     setProfileData({ ...profileData, occupation: value });
                  }}
               />
            </div>
         </div>
         <div className="mt-6 w-full">
            <h3 className="text-xl font-bold">Contacts</h3>
            <div className="flex flex-wrap gap-6 lg:grid p-3 grid-cols-2 w-full items-center border align-middle">
               <Input.Wrapper label={'Github'}>
                  <Input
                     value={profileData.socials?.github?.url}
                     size="lg"
                     placeholder={`Enter Github Link`}
                     onChange={(e) => handleSocialChange('github', e.target.value)}
                  />
               </Input.Wrapper>
               <Input.Wrapper label={'Linked In'}>
                  <Input
                     value={profileData.socials?.linkedIn?.url}
                     size="lg"
                     placeholder={`Enter Linked In Link`}
                     onChange={(e) => handleSocialChange('linkedIn', e.target.value)}
                  />
               </Input.Wrapper>
               <Input.Wrapper label={'Instagram'}>
                  <Input
                     value={profileData.socials?.instagram?.url}
                     onChange={(e) => handleSocialChange('instagram', e.target.value)}
                     size="lg"
                     placeholder={`Enter Instagram Link`}
                  />
               </Input.Wrapper>
               <Input.Wrapper label={'Portfolio'}>
                  <Input
                     value={profileData.socials?.portfolio?.url}
                     onChange={(e) => handleSocialChange('portfolio', e.target.value)}
                     size="lg"
                     placeholder={`Enter Portfolio Link`}
                  />
               </Input.Wrapper>
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
            <Button variant="filled" className="z-10  bg-black text-white self-center mt-6 " size="xl" radius={'xl'}>
               Submit
            </Button>
         </div>
      </div>
   );
};

export default ProfileRequestPage;
