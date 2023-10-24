import React from 'react';
import ChronoTimeline from './chrono-timeline';
import { sanityClient } from '@/sanity/sanity.client';
import { getAllTimeline } from '@/sanity/queries/timeline.query';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'RAEL | Timeline',
   description: 'All you need to know about RCA and the RCA community during the years',
   openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://rael.vercel.app/',
      siteName: 'RAEL',
      description: 'All you need to know about RCA and the RCA community during the years',
   },
};

export const revalidate = 15; // 15 seconds

const getTimelineData = async () => {
   const data = await sanityClient.fetch(getAllTimeline);
   return data;
};

const TimelinePage = async () => {
   const timeline = await getTimelineData();
   console.log('timeline', timeline);
   return (
      <>
         {/* <MantineTimeline /> */}
         {<ChronoTimeline data={timeline} />}
      </>
   );
};

export default TimelinePage;
