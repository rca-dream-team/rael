'use client';
import RText from '@/components/constants/RighteousText';
import NewsCard from '@/components/page_comps/news/NewsCard';
import LayoutChanger from '@/components/ui/LayoutChanger';
import { News } from '@/types/news';
import { useLocalStorage } from '@mantine/hooks';
import { useRouter } from 'next13-progressbar';
import { useEffect, useState } from 'react';
import CategoryChanger from '../ui/CategoryChanger';
import NewsList from './news/NewsList';
import NewsTile from './news/NewsTile';
import { useAuth } from '@/contexts/AuthProvider';

interface RcaDailyPageProps {
   news: News[];
}

const RcaDailyPage = ({ news }: RcaDailyPageProps) => {
   const { user } = useAuth();
   const isStaff = user?._type !== 'student';
   const [layout, setLayout] = useLocalStorage<'grid' | 'list' | 'tile'>({
      key: 'layout',
      defaultValue: 'grid',
   });
   const [category, setCategory] = useLocalStorage<'classified' | 'unclassified'>({
      key: 'category',
      defaultValue: 'unclassified',
   });
   const router = useRouter();
   const [newsFiltered, setNewsFiltered] = useState<News[]>(news);

   useEffect(() => {
      console.log('I will infinitely repeat');
   }, [router]);

   const handleLayoutChange = (layout: 'grid' | 'list' | 'tile') => {
      console.log(layout);
      setLayout(layout);
   };

   const handleCategoryChange = (category: 'classified' | 'unclassified') => {
      console.log(category);
      setCategory(category);
   };

   useEffect(() => {
      let newsFiltered: News[] = [];
      if (!isStaff) newsFiltered = news.filter((news) => (news?.category as string) == category);
      else newsFiltered = news.filter((news) => (news?.category as string) == 'unclassified');
      console.log(newsFiltered);
      setNewsFiltered(newsFiltered);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [category, news]);

   // const news=fetchNewsByCategory()

   return (
      <div className=" w-full lg:w-[80%] ">
         <div className="flex items-center justify-between w-full">
            <RText className="text-2xl">Rca News</RText>
            {!isStaff && <CategoryChanger value={category} onChange={handleCategoryChange} />}
            <LayoutChanger value={layout} onChange={handleLayoutChange} />
         </div>
         {/* <div>
            <p>{news.map((news)=>{
               news.category
            })}</p>
         </div> */}
         {layout === 'grid' ? (
            <div className="mt-5 grid gap-6 flex-wrap lg:grid-cols-3 sm:grid-cols-2">
               {newsFiltered.map((news) => (
                  <NewsCard key={news.slug.current} data={news} />
               ))}
            </div>
         ) : layout === 'list' ? (
            <div className="mt-5 flex flex-col gap-2">
               {news.map((news) => (
                  <NewsList key={news.slug.current} data={news} />
               ))}
            </div>
         ) : (
            <div className="mt-5 grid gap-2 lg:grid-cols-2">
               {news.map((news) => (
                  <NewsTile key={news.slug.current} data={news} />
               ))}
            </div>
         )}
      </div>
   );
};

export default RcaDailyPage;
