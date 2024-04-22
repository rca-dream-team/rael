import { fetchNewsBySlug } from '@/sanity/queries/news';
import { urlFor } from '@/sanity/sanity.client';
import { Children, Content, News } from '@/types/news';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';

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

   const SpanElement = ({ child }: { child: Children }) => {
      const { _key, _type, marks, text } = child;
      const styles = {
         textDecoration: marks.includes('underline') ? 'underline' : 'none',
         fontWeight: marks.includes('strong') ? 'bold' : 'normal',
         fontStyle: marks.includes('em') ? 'italic' : 'normal',
      };

      return (
         <span key={_key} className={marks.join(' ')} style={styles}>
            {text}
         </span>
      );
   };

   const components: Partial<PortableTextReactComponents> = {
      types: {
         image: ImageComponent,
         // Any other custom types you have in your content
         // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
         block: ({ isInline, index, value }) => {
            const c: Content = value;
            if (value.listItem) {
               return (
                  <ul key={c._key} className="list-disc list-inside my-1">
                     {c.children?.map((child) => {
                        return (
                           <li key={child._key}>
                              <SpanElement child={child} />
                           </li>
                        );
                     })}
                  </ul>
               );
            }
            return (
               <div key={c._key} className=" my-1">
                  {c.children?.map((child) => {
                     return <SpanElement key={child._key} child={child} />;
                  })}
               </div>
            );
         },
      },
   };

   return (
      <div className=" w-full p-6 flex flex-col">
         <Link href="/" className=" font-semibold mb-6 flex items-center gap-2 text-lg">
            <BiArrowBack />
            All news
         </Link>
         <div className="flex w-full flex-col font-poppins">
            <PortableText value={news.content} components={components} />
         </div>
      </div>
   );
};

export default ArticlePage;
