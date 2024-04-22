'use client';
import { CardStack } from '@/components/ui/card-stack';
import { urlFor } from '@/sanity/sanity.client';
import { Gallery } from '@/types/gallery';
import { Highlight } from '@mantine/core';

interface Props {
   gallery: Gallery[];
}

export function GalleryIndex({ gallery }: Props) {
   console.log('gallery', gallery);

   const cards = gallery.map((g, i) => {
      const colSpan = i % 3 === 0 ? 'md:col-span-2' : 'col-span-1';
      const thumbnail = g.coverImage ? urlFor(g.coverImage).url() : g?.images?.[0] ? urlFor(g?.images?.[0]).url() : null;
      return {
         id: g._id,
         content: (
            <div>
               <p className="font-bold text-lg text-white">{g.name}</p>
               <p className="font-normal text-base text-white"></p>
               <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{g.description}</p>
            </div>
         ),
         className: colSpan,
         thumbnail,
         images: g.images,
      };
   });

   const cardsStacks = [
      {
         id: 0,
         name: 'Manu Arora',
         designation: 'Senior Software Engineer',
         content: (
            <p>
               These cards are amazing, <Highlight highlight={'I want to use them'}>I want to use them</Highlight> in my project.
               Framer motion is a godsend ngl tbh fam 🙏
            </p>
         ),
      },
   ];

   return (
      <div className=" py-11 flex flex-col w-full">
         <div className="w-full grid grid-cols-1 h-full lg:grid-cols-3 md:grid-cols-2 max-w-7xl mx-auto gap-4 gap-y-10 ">
            {/* {cards.map((card, i) => (
               <Link href={`/gallery/${card.id}`} key={i} className={' w-full  rounded-lg aspect-[4/5] border shadow-sm'}>
                  <div className="relative overflow-hidden w-full h-full gallery-card rounded-lg">
                     <div className="bg-white rounded-xl h-full flex imgCont aspect-auto w-full">
                        <Image
                           src={card.thumbnail ?? '/images/mem1.png'}
                           alt="gallery"
                           layout="responsive"
                           objectFit="cover"
                           className="object-cover h-full w-full"
                           width={800}
                           height={600}
                        />
                     </div>
                     <div className=" absolute bottom-0 left-0 w-full bg-black/50 flex flex-col p-3">{card.content}</div>
                  </div>
               </Link>
            ))} */}
            {cards.map((card) => {
               const g = gallery.find((g) => g._id === card.id);
               console.log('g', g);
               if (!g) return null;
               return <CardStack key={card.id} gallery={g} />;
            })}
         </div>
      </div>
   );
}
