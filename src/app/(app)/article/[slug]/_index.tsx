'use client';
import RichContent from '@/components/shared/RichContent';
import { urlFor } from '@/sanity/sanity.client';
import { News } from '@/types/news';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';

interface Props {
   news: News;
}

const IndexPage = ({ news }: Props) => {
   console.log('news', news);
   return (
      <div
         className={` w-full flex top-0 flex-col items-center min-hfull flex-1 bg-opacity-10 relative`}
         style={{ background: 'url(' + urlFor(news.image).url() + ')', backgroundSize: 'cover' }}
      >
         <div className="absolute top-0 left-0 w-full h-full dark:bg-black/90 bg-white/95 z-0"></div>
         <div className=" w-full p-6 flex flex-col max-w-4xl z-10">
            <Link href="/" className=" font-semibold mb-6 flex items-center gap-2 text-lg">
               <BiArrowBack />
               All news
            </Link>
            <div className="flex w-full flex-col font-poppins">
               <RichContent content={news.content} />
            </div>
         </div>
      </div>
   );
};

export default IndexPage;
