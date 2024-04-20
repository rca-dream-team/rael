import RcaDailyPage from '@/components/page_comps/rca-daily';
import { fetchNews, fetchNewsCategories } from '@/sanity/queries/news';
import { News } from '@/types/news';

export const revalidate = 15;

export default async function Home() {
   const res: News[] = await fetchNews;
   const newCategories = await fetchNewsCategories;
   console.log('newCategories', newCategories);

   return <RcaDailyPage news={res} categories={[]} />;
}

Home.title = 'homepage';
Home.key = 'key';
