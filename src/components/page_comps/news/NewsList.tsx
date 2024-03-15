import PText from '@/components/constants/PoppinText';
import RText from '@/components/constants/RighteousText';
import { News } from '@/types/news';
import Link from 'next/link';
import React from 'react';

interface NewsCardProps {
   data: News;
}

const NewsList = ({ data }: NewsCardProps) => {
   return (
      <Link href={`/article/${data.slug.current}`} className="border duration-300 hover:bg-gray-50 rounded-xl w-full h-fit p-4">
         <RText className="text-xl">
            <h2>{data.title}</h2>
         </RText>
         <PText>{data.excerpt}</PText>
      </Link>
   );
};

export default NewsList;
