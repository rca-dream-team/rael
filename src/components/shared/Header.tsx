'use client';
import { useApp } from '@/contexts/AppProvider';
import { useAuth } from '@/contexts/AuthProvider';
import { BellIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Popover } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { RAELIcon } from '../constants/icons';
import NewNavbar from './navbar/new-navbar';
import { getImageUrl, urlFor } from '@/sanity/sanity.client';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
   const { toggleTheme, isDarkTheme } = useApp();
   const { user } = useAuth();
   console.log('user', user);

   return (
      <header className="flex sticky top-0 bg-white dark:bg-black w-full dark:border-slate-900/90 items-center justify-between border-b z-50 py-4">
         <RAELIcon size={100} />
         <div className="">
            <NewNavbar />
         </div>
         <div className="flex gap-x-3 relative z-50 items-center">
            {/* <div className={`flex items-center absolute mr-4 right-20 gap-x-3 ${searchVal ? 'flex-row-reverse' : ''}`}>
               <MagnifyingGlassIcon className="w-6 font-bold cursor-pointer" onClick={handleShowSearch} />
               {searchVal ? <SearchBar setSearchVal={setSearchVal} /> : <></>}
            </div> */}
            <BellIcon className="w-7 cursor-pointer font-bold" />
            <Popover width={200} position="bottom" shadow="md">
               <Popover.Target>
                  {user?.picture ? (
                     <Image
                        src={getImageUrl(user?.picture)!}
                        alt="avatar"
                        height={35}
                        width={35}
                        className=" rounded-full cursor-pointer object-cover"
                     />
                  ) : (
                     <button>
                        <FaUserCircle className=" text-3xl cursor-pointer" />
                     </button>
                  )}
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
