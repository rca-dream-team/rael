import { createClient } from 'next-sanity';

export const sanityConfig: any = {
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rrmy9xks',
   useCdn: typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
   apiVersion: '2022-11-16',
   token:
      process.env.SANITY_SECRET_TOKEN ||
      'skYyGCOxRbpijBQHxTSKDusxnZJG7cbpRXVm6i9FamHxxH6PukYj8vmrmCHhDBQVxJErcmspyjWfFU8Ao1RoT0rnGffr3xa9YeWsbMHeSjRQfeJIv948CN8MA0GKAJaPWgNrCsfb6mwAZjoa6Big5iE4c6CfobQtWS6b6F4ss0ZY59uaMb6U',
};

export const sanityClient = createClient(sanityConfig);
