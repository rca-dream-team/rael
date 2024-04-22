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
   const student = await sanityClient.fetch('*[_type == "student" && _id == $docId][0]', { docId });
   if (!student) throw new Error('Student not found or Your profile must be approved first.');
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
   console.log('images', [
      ...images,
      {
         _type: 'image',
         asset: {
            _type: 'reference',
            _ref: asset._id,
         },
      },
   ]);
   const newImages = [
      ...images,
      {
         _type: 'image',
         _key: asset._id,
         asset: {
            _type: 'reference',
            _ref: asset._id,
         },
      },
   ];
   const doc = await sanityClient
      .patch(docId)
      .set({
         images: newImages.map((image) => ({
            _type: 'image',
            _key: image._key,
            asset: {
               _type: 'reference',
               _ref: image.asset._ref,
            },
         })),
      })
      .commit();
   return doc;
};
