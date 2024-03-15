import { defineType } from 'sanity';

export default defineType({
   name: 'gallery',
   title: 'Gallery',
   type: 'document',
   fields: [
      {
         name: 'name',
         title: 'Name',
         type: 'string',
         description: 'Name of the gallery',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'description',
         title: 'Description',
         type: 'text',
         description: 'Description of the gallery',
      },
      {
         name: 'coverImage',
         title: 'Cover Image',
         type: 'image',
      },
      {
         name: 'images',
         title: 'Images',
         type: 'array',
         of: [{ type: 'galleryImage' }],
         validation: (Rule) => Rule.required(),
      },
   ],
});