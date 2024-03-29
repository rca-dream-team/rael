import { defineField, defineType } from 'sanity';

export default defineType({
   name: 'category',
   title: 'News category',
   type: 'document',
   fields: [
      {
         name: 'name',
         title: 'name',
         type: 'string',
         validation: (Rule) => Rule.required(),
      },
   ],
});
