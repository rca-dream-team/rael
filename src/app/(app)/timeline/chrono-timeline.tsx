'use client';
import { useApp } from '@/contexts/AppProvider';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { Chrono } from 'react-chrono';
import { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel';

const ChronoTimeline = () => {
   const { isDarkTheme } = useApp();
   const [loading, setLoading] = React.useState(true);
   const items: TimelineItemModel[] = [
      {
         title: 'May 1940',
         cardTitle: 'Dunkirk',
         url: 'http://www.history.com',
         cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
         cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
         //   media: {
         //     type: "IMAGE",
         //     source: {
         //       url: "http://someurl/image.jpg",
         //     },
         //   },
      },
   ];

   useEffect(() => {
      setLoading(true);
      const timeout = setTimeout(() => {
         setLoading(false);
      }, 1000);

      return () => {
         setLoading(false);
         clearTimeout(timeout);
      };
   }, [isDarkTheme]);

   return (
      <div className="" style={{ width: '100%', height: '75vh' }}>
         {/* {createPortal( */}
         {!loading ? (
            <Chrono
               slideShow
               items={[...items, ...items, ...items, ...items, ...items, ...items]}
               mode="VERTICAL_ALTERNATING"
               theme={{
                  primary: isDarkTheme ? 'white' : 'black',
                  secondary: isDarkTheme ? 'white' : 'black',
                  cardBgColor: isDarkTheme ? 'black' : 'white',
                  titleColor: isDarkTheme ? 'white' : 'black',
                  titleColorActive: isDarkTheme ? 'black' : 'white',
                  cardTitleColor: isDarkTheme ? 'white' : 'black',
                  cardSubtitleColor: isDarkTheme ? 'white' : 'black',
                  cardDetailsColor: isDarkTheme ? 'white' : 'black',
               }}
               classNames={{
                  cardTitle: 'hidden',
                  cardSubTitle: 'timeDetail',
                  cardText: 'cardText',
               }}
            />
         ) : (
            <div className=" flex items-center dark:text-white justify-center h-full w-full">
               <h1 className="text-xl font-bold">Please Wait...</h1>
            </div>
         )}
         ,
         {/* document.querySelector("html") as Element
      )} */}
      </div>
   );
};

export default ChronoTimeline;
