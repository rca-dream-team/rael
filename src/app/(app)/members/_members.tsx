'use client';
import { IStudent } from '@/types/student.type';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { FC, useEffect } from 'react';

interface MembersProps {
   students: IStudent[];
   staffs: any[];
}

const Members: FC<MembersProps> = ({ staffs, students }) => {
   const [tab, setTab] = React.useState('students');
   const [filter, setFilter] = React.useState('');
   const searchParams = useSearchParams();

   useEffect(() => {
      if (!searchParams) return;
      const tab = searchParams.get('tab');
      if (tab) setTab(tab);
      const filter = searchParams.get('filter');
      if (filter) setFilter(filter);
   }, [searchParams]);
   return (
      <>
         {/* <h2 className="font-bold text-xl">Staff</h2> */}
         <div className=" border-2 bg-white dark:bg-black dark:border-slate-900/90 overflow-hidden flex items-center w-fit max-w-[300px] mx-auto rounded-[3em]">
            <button
               onClick={() => setTab('students')}
               className={`2sm:py-2 cursor-pointer w-32  py-2 whitespace-nowrap px-3 2sm:text-base text-sm rounded-[3em] 2sm:px-5 ${
                  tab === 'students'
                     ? 'dark:bg-white dark:text-black bg-black text-white'
                     : 'dark:bg-black dark:text-white bg-white text-black'
               }`}
            >
               Students
            </button>
            <button
               onClick={() => setTab('staffs')}
               className={`2sm:py-2 cursor-pointer w-32  py-2 whitespace-nowrap px-3 2sm:text-base text-sm rounded-[3em] 2sm:px-5 ${
                  tab === 'staffs'
                     ? 'dark:bg-white dark:text-black bg-black text-white'
                     : 'dark:bg-black dark:text-white bg-white text-black'
               }`}
            >
               Staffs
            </button>
         </div>
         <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 2sm:grid-cols-2 gap-x-4 gap-y-6 w-full gap-2 mt-4">
            {students.map((student, i) => (
               <Link
                  key={i}
                  href={`/members/${student._id}` as any}
                  className="bg-gray-100 mx-auto max-w-[300px] w-full dark:bg-slate-950/90 h-fit rounded-xl border border-slate-300 dark:border-slate-900/80 p-2 text-center"
               >
                  <Image src={'/images/mem3.png'} width={200} height={200} className="object-cover min-w-full" alt="member" />
                  <p className="text-md font-bold mt-1">{student.names}</p>
                  <span className="text-sm text-gray-600">{student.leaderTitle}</span>
               </Link>
            ))}
         </div>
      </>
   );
};

export default Members;
