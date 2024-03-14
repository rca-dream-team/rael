import { fetchNewsBySlug } from '@/sanity/queries/news';
import { News } from '@/types/news';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlFor } from '@/sanity/sanity.client';

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

   const ImageComponent = ({ value, isInline }: any) => {
      const { width, height } = getImageDimensions(value);
      return (
         <Image
            src={urlFor(value)
               .width(isInline ? 100 : 800)
               .fit('max')
               .auto('format')
               .url()}
            alt={value.alt || ' '}
            loading="lazy"
            width={width}
            height={height}
            className=" py-4"
            style={{
               // Display alongside text if image appears inside a block text span
               display: isInline ? 'inline-block' : 'block',

               // Avoid jumping around with aspect-ratio CSS property
               aspectRatio: width / height,
            }}
         />
      );
   };

   const components = {
      types: {
         image: ImageComponent,
         // Any other custom types you have in your content
         // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
      },
   };

   return (
      <div className=" w-full p-6 flex flex-col">
         <Link href="/" className=" font-semibold mb-6 flex items-center gap-2 text-lg">
            <BiArrowBack />
            All news
         </Link>
         <PortableText value={news.content} components={components} />
      </div>
   );
};

export default ArticlePage;
