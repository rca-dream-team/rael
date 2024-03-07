import { createClient } from 'next-sanity';

export const sanityConfig: any = {
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rrmy9xks',
   useCdn: typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
   apiVersion: '2022-11-16',
   token: process.env.SANITY_TOKEN,
};

export const sanityClient = createClient(sanityConfig);
