import { defineField, defineType } from 'sanity';

export default defineType({
   name: 'category',
   title: 'News category',
   type: 'document',
   fields: [
      defineField({
         name: 'category',
         title: 'Category',
         type: 'string',
         validation: (Rule) => Rule.required(),
      }),
   ],
});
