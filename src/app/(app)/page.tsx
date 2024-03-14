import { fetchNews } from '@/sanity/queries/news';
import RcaDailyPage from './rca-daily/page';
import { News } from '@/types/news';

export default async function Home() {
   const res: News[] = await fetchNews;
   return <RcaDailyPage news={res} />;
}

Home.title = 'homepage';
Home.key = 'key';
