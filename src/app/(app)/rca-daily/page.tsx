'use client';
import RText from '@/components/constants/RighteousText';
import CardComponent from '@/components/shared/Card';
import LayoutChanger from '@/components/ui/LayoutChanger';
import { News } from '@/types/news';
import { useState } from 'react';

interface RcaDailyPageProps {
   news: News[];
}

const RcaDailyPage = ({ news }: RcaDailyPageProps) => {
   const [layout, setLayout] = useState<'grid' | 'list' | 'tile'>('grid');
   return (
      <>
         <div className=" w-[80%] ">
            <div className="flex items-center justify-between w-full">
               <RText className="text-2xl">Rca News</RText>
               <LayoutChanger value="grid" onChange={(layout) => console.log(layout)} />
            </div>
            <div className="mt-5 flex gap-6 flex-wrap">
               {news.map((news) => (
                  <CardComponent key={news.slug.current} data={news} />
               ))}
            </div>
         </div>
      </>
   );
};

export default RcaDailyPage;
