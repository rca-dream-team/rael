'use client';
import { useApp } from '@/contexts/AppProvider';
import { Timeline } from '@/types/timeline.type';
import dayjs from 'dayjs';
import React, { FC, useEffect } from 'react';
import { Chrono } from 'react-chrono';
import { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel';

interface TimelineProps {
   data: Timeline[];
}

const ChronoTimeline: FC<TimelineProps> = ({ data }) => {
   const { isDarkTheme } = useApp();
   const [loading, setLoading] = React.useState(true);
   const [timeLineData, setTimeLineData] = React.useState<TimelineItemModel[]>([]);

   function mapTimelineDataToModel(data: Timeline[]): TimelineItemModel[] {
      return data.map((item) => ({
         title: dayjs(item.time).format('MMM D YYYY'),
         cardTitle: item.title,
         url: item.url,
         cardSubtitle: item.description,
         cardDetailedText: item.description,
         // imageUrl: item.image.asset.url,
         media: {
            type: 'IMAGE',
            source: {
               url: item.image.asset.url,
            },
         },
      }));
   }

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

   useEffect(() => {
      const newTimeLine = mapTimelineDataToModel(data);
      console.log('newTimeLine', newTimeLine);
      setTimeLineData(newTimeLine);
   }, [data]);
   return (
      <div className="" style={{ width: '100%', height: '75vh' }}>
         {/* {createPortal( */}
         {!loading ? (
            <Chrono
               slideShow
               items={[...timeLineData, ...timeLineData, ...timeLineData]}
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
