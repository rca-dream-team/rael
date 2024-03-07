import { defineField } from 'sanity';

export default defineField({
   name: 'news',
   title: 'News',
   type: 'document',
   fields: [
      {
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'description',
         title: 'Description',
         type: 'text',
         validation: (Rule) => Rule.required(),
      },
      // content
      {
         name: 'content',
         title: 'Content',
         type: 'array',
         of: [{ type: 'block' }],
      },
      {
         name: 'mainImage',
         title: 'Main Image',
         type: 'image',
         options: {
            hotspot: true,
         },
      },
      {
         name: 'images',
         title: 'Images',
         type: 'array',
         of: [{ type: 'image' }],
      },
      {
         name: 'time',
         title: 'time',
         type: 'datetime',
      },
      {
         name: 'author',
         title: 'Author',
         type: 'reference',
         to: [{ type: 'author' }],
      },
   ],
   preview: {
      select: {
         title: 'title',
         media: 'mainImage',
      },
   },
});
