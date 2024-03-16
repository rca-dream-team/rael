'use client';
import { urlFor } from '@/sanity/sanity.client';
import { Gallery } from '@/types/gallery';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
   gallery: Gallery[];
}

export function GalleryIndex({ gallery }: Props) {
   console.log('gallery', gallery);

   const cards = gallery.map((g, i) => {
      const colSpan = i % 3 === 0 ? 'md:col-span-2' : 'col-span-1';
      const thumbnail = g.coverImage ? urlFor(g.coverImage).url() : g?.images?.[0] ? urlFor(g?.images?.[0]?.image).url() : null;
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
      };
   });

   return (
      <div className="h-screen py-11 w-full">
         <div className="w-full h-full p-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  max-w-7xl mx-auto gap-4 ">
            {[...cards].map((card, i) => (
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
            ))}
         </div>
      </div>
   );
}

// const SkeletonOne = () => {
//    return (
//       <div>
//          <p className="font-bold text-4xl text-white">House in the woods</p>
//          <p className="font-normal text-base text-white"></p>
//          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//             A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city
//             life.
//          </p>
//       </div>
//    );
// };

// const SkeletonTwo = () => {
//    return (
//       <div>
//          <p className="font-bold text-4xl text-white">House above the clouds</p>
//          <p className="font-normal text-base text-white"></p>
//          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//             Perched high above the world, this house offers breathtaking views and a unique living experience. It&apos;s a place
//             where the sky meets home, and tranquility is a way of life.
//          </p>
//       </div>
//    );
// };
// const SkeletonThree = () => {
//    return (
//       <div>
//          <p className="font-bold text-4xl text-white">Greens all over</p>
//          <p className="font-normal text-base text-white"></p>
//          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//             A house surrounded by greenery and nature&apos;s beauty. It&apos;s the perfect place to relax, unwind, and enjoy life.
//          </p>
//       </div>
//    );
// };
// const SkeletonFour = () => {
//    return (
//       <div>
//          <p className="font-bold text-4xl text-white">Rivers are serene</p>
//          <p className="font-normal text-base text-white"></p>
//          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//             A house by the river is a place of peace and tranquility. It&apos;s the perfect place to relax, unwind, and enjoy
//             life.
//          </p>
//       </div>
//    );
// };

// const cards = [
//    {
//       id: 1,
//       content: <SkeletonOne />,
//       className: 'md:col-span-2',
//       thumbnail:
//          'https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//    },
//    {
//       id: 2,
//       content: <SkeletonTwo />,
//       className: 'col-span-1',
//       thumbnail:
//          'https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//    },
//    {
//       id: 3,
//       content: <SkeletonThree />,
//       className: 'col-span-1',
//       thumbnail:
//          'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//    },
//    {
//       id: 4,
//       content: <SkeletonFour />,
//       className: 'md:col-span-2',
//       thumbnail:
//          'https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//    },
// ];
