// 'use server';

import { sanityClient } from '@/sanity/sanity.client';

interface Opts {
   //    docType: string;
   docId: string;
}

export const updateProfilePicture = async (file: File, opts: Opts) => {
   console.log('file', file);
   const { docId } = opts;
   const asset = await sanityClient.assets.upload('image', file, { filename: file.name });
   const doc = await sanityClient
      .patch(docId)
      .set({
         picture: {
            _type: 'image',
            asset: {
               _type: 'reference',
               _ref: asset._id,
            },
         },
      })
      .commit();
   return doc;
};

export const addStudentImage = async (file: File, opts: Opts) => {
   const { docId } = opts;
   const asset = await sanityClient.assets.upload('image', file, { filename: file.name });
   const student = await sanityClient.fetch('*[_type == "student" && _id == $docId][0]', { docId });
   if (!student) throw new Error('Student not found');
   const images = student.images || [];
   const doc = await sanityClient
      .patch(docId)
      .set({
         images: [
            ...images,
            {
               _type: 'image',
               asset: {
                  _type: 'reference',
                  _ref: asset._id,
               },
            },
         ],
      })
      .commit();
   return doc;
};
