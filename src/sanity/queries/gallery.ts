import { groq } from 'next-sanity';
import { sanityClient } from '../sanity.client';

export const galleryFields = groq`
    _id,
    name,
    description,
    coverImage,
    images[]{
        image,
        title,
        caption,
        shotBy
    }
`;

export const fetchGalleryQuery = groq`
    *[_type == "gallery"] {
        ${galleryFields}
    }
`;

export const fetchGallery = () => sanityClient.fetch(fetchGalleryQuery);

export const fetchGalleryPaginated = (page: number, pageSize: number) => {
   return sanityClient.fetch(
      groq`
            *[_type == "gallery"] | order(_createdAt desc) [${(page - 1) * pageSize}...${page * pageSize}] {
                ${galleryFields}
            }
        `,
   );
};

export const fetchGalleryById = (id: string) => {
   return sanityClient.fetch(
      groq`
            *[_type == "gallery" && _id == $id][0] {
                ${galleryFields}
            }
        `,
      { id },
   );
};
