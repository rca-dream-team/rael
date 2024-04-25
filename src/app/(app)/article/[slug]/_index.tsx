'use client';
import { urlFor } from '@/sanity/sanity.client';
import { Children, Content, News } from '@/types/news';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import { FastAverageColor } from 'fast-average-color';
import image from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

interface Props {
   news: News;
}

const IndexPage = ({ news }: Props) => {
   const [color, setColor] = useState<string>('#000000');
   const getColor = async () => {
      console.log('getting color');
      const src = urlFor(news.image).url();
      const fac = new FastAverageColor();
      const color = await fac.getColorAsync(src);
      console.log('color', color);
      setColor(color.hex);
   };

   useEffect(() => {
      getColor();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

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
            className=" py-4 w-full"
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
               <PortableText value={news.content} components={components} />
            </div>
         </div>
      </div>
   );
};

export default IndexPage;
