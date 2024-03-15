import RcaDailyPage from '@/components/page_comps/rca-daily';
import { fetchNews } from '@/sanity/queries/news';
import { News } from '@/types/news';

export const revalidate = 15;

export default async function Home() {
   const res: News[] = await fetchNews;
   return <RcaDailyPage news={res} />;
}

Home.title = 'homepage';
Home.key = 'key';
