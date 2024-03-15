'use client';
import { LayoutGrid } from '@/components/ui/layout-grid';
import { urlFor } from '@/sanity/sanity.client';
import { Gallery } from '@/types/gallery';

interface Props {
   gallery: Gallery;
}

export function GalleryIdIndex({ gallery }: Props) {
   console.log('gallery id', gallery);
   const cards = gallery.images.map((g, i) => {
      const colSpan = i % 3 === 0 ? 'md:col-span-2' : 'col-span-1';
      return {
         id: g.title ?? i,
         content: (
            <div>
               <p className="font-bold text-4xl text-white">{g.title}</p>
               <p className="font-normal text-base text-white"></p>
               <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{g.caption}</p>
            </div>
         ),
         className: colSpan,
         thumbnail: urlFor(g.image).url(),
      };
   });
   console.log('cards', cards);

   return (
      <div className="h-screen py-11 w-full">
         <LayoutGrid cards={cards} />
      </div>
   );
}
