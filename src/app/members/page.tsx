import MainAppLayout from '@/components/layouts/MainAppLayout';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'RCA Members - RAEL',
};

const MembersPage = async () => {
   return (
      <MainAppLayout>
         <div className="w-[90%]">
            <h2 className="font-bold text-xl">Staff</h2>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 2sm:grid-cols-2 gap-x-4 gap-y-6 w-full gap-2 mt-4">
               {new Array(10).fill(0).map((_, i) => (
                  <Link
                     key={i}
                     href={`/members/${i + 1}` as any}
                     className="bg-gray-100 mx-auto max-w-[300px] w-full dark:bg-slate-950/90 h-fit rounded-xl border border-slate-300 dark:border-slate-900/80 p-2 text-center"
                  >
                     <Image src={'/images/mem3.png'} width={200} height={200} className="object-cover min-w-full" alt="member" />
                     <p className="text-md font-bold mt-1">SINGIZWA Nick</p>
                     <span className="text-sm text-gray-600">Football Captain</span>
                  </Link>
               ))}
            </div>
         </div>
      </MainAppLayout>
   );
};

export default MembersPage;
