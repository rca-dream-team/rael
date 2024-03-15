import RcaDailyPage from '@/components/page_comps/rca-daily';
import { fetchNews } from '@/sanity/queries/news';
import { News } from '@/types/news';
import { Metadata } from 'next';
import React from 'react';

export const revalidate = 15;

export const metadata: Metadata = {
   title: 'Rca Daily | RAEL',
   description: 'Rca Daily',
};

const RcaDaily = async () => {
   const res: News[] = await fetchNews;
   return (
      <>
         <RcaDailyPage news={res} />
      </>
   );
};

export default RcaDaily;
