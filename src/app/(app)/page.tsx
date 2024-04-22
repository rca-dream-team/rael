import RcaDailyPage from '@/components/page_comps/rca-daily';
import { fetchNews } from '@/sanity/queries/news';
import { News } from '@/types/news';

export const revalidate = 5;

const getNews = async () => {
   const news = await fetchNews;
   return news;
};

export default async function Home() {
   const res: News[] = await getNews();
   // const newCategories = await fetchNewsCategories;
   console.log('res', res);

   return <RcaDailyPage news={res} categories={[]} />;
}
