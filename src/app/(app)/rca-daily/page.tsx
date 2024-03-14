import RText from '@/components/constants/RighteousText';
import CardComponent from '@/components/shared/Card';
import { News } from '@/types/news';

interface RcaDailyPageProps {
   news: News[];
}

const RcaDailyPage = ({ news }: RcaDailyPageProps) => {
   return (
      <>
         <div className=" w-[80%] ">
            <RText className="text-2xl">Rca News</RText>
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
