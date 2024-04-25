import { fetchNewsBySlug } from '@/sanity/queries/news';
import { News } from '@/types/news';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IndexPage from './_index';

export const revalidate = 15;

export const generateMetadata = async ({ params }: any) => {
   const news: News = params?.slug ? await fetchNewsBySlug(params?.slug) : null;

   return {
      title: `${news?.title} | RAEL`,
      description: news?.excerpt,
      openGraph: {
         title: `${news?.title} | RAEL`,
         description: news?.excerpt,
         type: 'article',
         url: `https://rca.ac.rw/article/${news?.slug.current}`,
         images: [news?.image],
      },
   } as Metadata;
};

const ArticlePage = async (props: any) => {
   if (!props?.params?.slug) return notFound();
   const news: News = await fetchNewsBySlug(props?.params?.slug);
   if (!news) return notFound();

   return <IndexPage news={news} />;
};

export default ArticlePage;
