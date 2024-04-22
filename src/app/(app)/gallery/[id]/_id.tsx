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
         id: i,
         index: i, // to be used in gallery viewer
         content: (
            <div>
               <p className="font-bold text-4xl text-white">{gallery.name}</p>
               <p className="font-normal text-base text-white"></p>
            </div>
         ),
         className: colSpan,
         thumbnail: urlFor(g).url(),
      };
   });
   console.log('cards', cards);

   return (
      <div className=" py-11 w-full">
         <LayoutGrid cards={cards} gallery={gallery} />
      </div>
   );
}
