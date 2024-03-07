'use client';
import { useApp } from '@/contexts/AppProvider';
import { BellIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Popover } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RAELIcon } from '../constants/icons';
import NavBar from './NavBar';

const Header = () => {
   const [searchVal, setSearchVal] = useState(false);
   const { toggleTheme, isDarkTheme } = useApp();

   const handleShowSearch = () => {
      setSearchVal(true);
   };

   return (
      <header className="flex w-full dark:border-slate-900/90 items-center justify-between border-b-2 py-6">
         <RAELIcon size={100} />
         <div className="">
            <NavBar />
         </div>
         <div className="flex gap-x-3 relative items-center">
            {/* <div className={`flex items-center absolute mr-4 right-20 gap-x-3 ${searchVal ? 'flex-row-reverse' : ''}`}>
               <MagnifyingGlassIcon className="w-6 font-bold cursor-pointer" onClick={handleShowSearch} />
               {searchVal ? <SearchBar setSearchVal={setSearchVal} /> : <></>}
            </div> */}
            <BellIcon className="w-7 cursor-pointer font-bold" />
            <Popover width={200} position="bottom" shadow="md">
               <Popover.Target>
                  <Image
                     src={'/svgs/avatar.svg'}
                     alt="avatar"
                     height={40}
                     width={40}
                     className=" rounded-full cursor-pointer object-cover"
                  />
               </Popover.Target>
               <Popover.Dropdown p={0} className=" border-gray-700 overflow-hidden">
                  <div className="flex dark:bg-black flex-col">
                     <Link href={'/profile'} className="text-sm font-poppins p-2 hover:text-white hover:bg-gray-600 font-bold">
                        Profile
                     </Link>
                     <Link href={'#'} className="text-sm font-poppins p-2 hover:text-white hover:bg-gray-600 font-bold">
                        Settings
                     </Link>
                     <Link
                        href={'/auth/logout'}
                        className="text-sm font-poppins p-2 hover:text-white hover:bg-gray-600 font-bold"
                     >
                        Logout
                     </Link>
                  </div>
               </Popover.Dropdown>
            </Popover>
            <div
               style={{
                  cursor: 'pointer',
               }}
               onClick={toggleTheme}
               className=" dark:text-white rounded-full items-center justify-center flex"
            >
               {!isDarkTheme ? <SunIcon className="w-7 dark:text-white" /> : <MoonIcon className="w-7 dark:text-white" />}
            </div>
         </div>
      </header>
   );
};

export default Header;
