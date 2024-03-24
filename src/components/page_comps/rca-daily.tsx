'use client';
import RText from '@/components/constants/RighteousText';
import NewsCard from '@/components/page_comps/news/NewsCard';
import LayoutChanger from '@/components/ui/LayoutChanger';
import { News } from '@/types/news';
import { useLocalStorage } from '@mantine/hooks';
import NewsList from './news/NewsList';
import NewsTile from './news/NewsTile';
import { fetchNewsByCategory } from '@/sanity/queries/news';
import CategoryChanger from '../ui/CategoryChanger';
import { useRouter } from 'next13-progressbar';
import { useEffect } from 'react';

interface RcaDailyPageProps {
   news: News[];
}

const RcaDailyPage = ({ news }: RcaDailyPageProps) => {
   const [layout, setLayout] = useLocalStorage<'grid' | 'list' | 'tile'>({
      key: 'layout',
      defaultValue: 'grid',
   });

   const [category, setCategory] = useLocalStorage<'classified' | 'unclassified'>({
      key: 'category',
      defaultValue: 'unclassified',
   });
   const router = useRouter();
   //    const [layout, setLayout] = useState(savedLayout);

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

   //    console.log('savedLauoy', savedLayout);
   console.log('Lauoy', layout);
   console.log(category);

   const newsFiltered = news.filter((news) => (news?.category as unknown as string) == category);
   console.log(news);

   // const news=fetchNewsByCategory()

   return (
      <div className=" w-full lg:w-[80%] ">
         <div className="flex items-center justify-between w-full">
            <RText className="text-2xl">Rca News</RText>
            <CategoryChanger value={category} onChange={handleCategoryChange} />
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
