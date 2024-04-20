import { defineType } from 'sanity';

export default defineType({
   name: 'news-category',
   title: 'News Category',
   type: 'document',
   fields: [
      {
         name: 'name',
         title: 'Name',
         validation: (Rule) => Rule.required(),
         type: 'string',
      },
      {
         name: 'classified',
         type: 'boolean',
         title: 'Classified',
         description: 'Is this category classified?',
         validation: (Rule) => Rule.required(),
         initialValue: false,
      },
   ],
});
