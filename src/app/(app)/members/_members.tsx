'use client';
import PromFilter from '@/components/page_comps/members/PromFilter';
import { getImageUrl } from '@/sanity/sanity.client';
import { IStudent } from '@/types/student.type';
import { Card, Input } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { FC, useEffect } from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

interface MembersProps {
   students: IStudent[];
   staffs: any[];
}

const Members: FC<MembersProps> = ({ staffs, students }) => {
   const [tab, setTab] = React.useState('students');
   const [filter, setFilter] = React.useState('');
   const [filteredStudents, setFilteredStudents] = React.useState<IStudent[]>([]);
   const searchParams = useSearchParams();

   useEffect(() => {
      if (!searchParams) return;
      const tab = searchParams.get('tab');
      if (tab) setTab(tab);
      const filter = searchParams.get('filter');
      if (filter) setFilter(filter);
   }, [searchParams]);

   useEffect(() => {
      if (tab === 'students') {
         if (filter) handlePromChange(filter);
         else setFilteredStudents(students);
      } else {
         setFilteredStudents(staffs);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [tab, students, staffs]);

   const handlePromChange = (e: string | null) => {
      e && setFilter(e);
      if (e) {
         const filtered = students.filter((student) => student.promotion === e);
         setFilteredStudents(filtered);
      } else {
         setFilteredStudents(students);
      }
   };

   const handleSearch = (e: string) => {
      setFilter(e);
      if (e) {
         const filtered = students.filter((student) => {
            const json = JSON.stringify(student);
            return json.toLowerCase().includes(e.toLowerCase());
         });
         setFilteredStudents(filtered);
      } else {
         setFilteredStudents(students);
      }
   };

   return (
      <>
         <div className=" flex justify-between md:flex-row flex-col gap-2 items-center w-full">
            <PromFilter handleChange={handlePromChange} label="Filter" />
            <div className=" border-2 bg-white dark:bg-black dark:border-slate-900/90 overflow-hidden flex items-center w-fit max-w-[300px] rounded-[3em]">
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
            <div className="">
               <Input.Wrapper label="Search" className="w-full">
                  <Input
                     value={filter}
                     onChange={(e) => handleSearch(e.currentTarget.value)}
                     placeholder="Search"
                     className="w-full"
                     rightSection={<FaSearch />}
                  />
               </Input.Wrapper>
            </div>
         </div>
         <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-6 w-full gap-2 mt-4">
            {filteredStudents.map((student, i) => (
               <Card padding={0} shadow="sm" key={i}>
                  <Link href={`/members/${student._id}` as any} className=" w-full h-fit rounded-xl text-center">
                     <div className=" w-full aspect-square overflow-hidden max-w-[300px] justify-center flex items-center">
                        {student.picture ? (
                           <Image
                              src={getImageUrl(student.picture)!}
                              width={200}
                              height={200}
                              className="object-cover min-w-full h-full"
                              alt="member"
                           />
                        ) : (
                           <FaUserCircle className=" text-3xl cursor-pointer" />
                        )}
                     </div>
                     <div className="flex flex-col p-2">
                        <p className="text-md text-center font-bold mt-1">{student.names}</p>
                        <span className="text-sm text-center text-gray-600 w-full mx-auto justify-center flex">
                           {student.leaderTitle}
                        </span>
                     </div>
                  </Link>
               </Card>
            ))}
         </div>
      </>
   );
};

export default Members;
