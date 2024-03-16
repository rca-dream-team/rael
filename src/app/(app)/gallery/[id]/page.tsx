import { fetchGalleryById } from '@/sanity/queries/gallery';
import { urlFor } from '@/sanity/sanity.client';
import { PageProps } from '@/types';
import { Gallery } from '@/types/gallery';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';
import { GalleryIdIndex } from './_id';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';

export const revalidate = 15;

export async function generateMetadata(props: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
   if (!props.params?.id) return { title: 'Gallery' };
   const data: Gallery = await fetchGalleryById(props.params?.id);
   return {
      title: data.name,
      description: data.description,
      openGraph: {
         images: [
            {
               url: urlFor(data.coverImage).url(),
               width: 800,
               height: 600,
               alt: data.name,
            },
            ...data.images.map((image) => ({
               url: urlFor(image.image).url(),
               width: 800,
               height: 600,
               alt: image.title,
            })),
         ],
      },
   } as Metadata;
}

const GalleryIdPage = async (props: PageProps) => {
   if (!props.params?.id) return notFound();
   const gallery: Gallery = await fetchGalleryById(props.params?.id);
   if (!gallery) return notFound();

   return (
      <div className=" w-full flex flex-col">
         <Link href="/gallery" className=" font-semibold mb-6 flex items-center gap-2 text-lg">
            <BiArrowBack />
            Back to all gallery
         </Link>
         <h1 className=" text-center text-lg">{gallery.name}</h1>
         <GalleryIdIndex gallery={gallery} />
      </div>
   );
};

export default GalleryIdPage;
