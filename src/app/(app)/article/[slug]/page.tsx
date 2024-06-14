import { fetchNewsBySlug } from '@/sanity/queries/news';
import { News } from '@/types/news';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IndexPage from './_index';
import prisma from '@/lib/prisma';

// export const revalidate = 15;
export const dynamic = 'force-dynamic';

const getNews = async (slug: string) => {
   try {
      return await fetchNewsBySlug(slug);
   } catch (error) {
      console.log('error', error);
      return null;
   }
};

export const generateMetadata = async ({ params }: any) => {
   const news: News = params?.slug ? await getNews(params?.slug) : null;

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

const getComments = async (id: string) => {
   return prisma.comment.findMany({
      where: {
         postId: id,
      },
      orderBy: {
         createdAt: 'desc',
      },
   });
};

const ArticlePage = async (props: any) => {
   if (!props?.params?.slug) return notFound();
   const news: News = await getNews(props?.params?.slug);
   console.log('news', news);
   if (!news) return notFound();
   const comments = (await getComments(news._id)) ?? [];
   // console.log('comments', comments);

   return <IndexPage news={news} comments={comments} />;
};

export default ArticlePage;
