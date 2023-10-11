import { defineField, defineType } from 'sanity';

export default defineType({
   name: 'student',
   title: 'Student',
   type: 'document',
   fields: [
      defineField({
         name: 'names',
         title: 'Names',
         type: 'string',
         validation: (Rule) => Rule.required(),
      }),
      {
         name: 'email',
         title: 'Email',
         type: 'email',
         validation: (Rule) => Rule.required(),
      },
      defineField({
         name: 'picture',
         title: 'Picture',
         type: 'image',
         options: {
            hotspot: true,
         },
      }),
      defineField({
         name: 'bio',
         title: 'Bio',
         type: 'string',
      }),
      defineField({
         name: 'class',
         title: 'Class',
         type: 'reference',
         to: [{ type: 'class' }],
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'promotion',
         title: 'Promotion',
         type: 'reference',
         to: [{ type: 'promotion' }],
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'occupation',
         title: 'Occupation',
         type: 'array',
         of: [{ type: 'string' }],
      }),
      defineField({
         name: 'leaderTitle',
         title: 'Leader Title',
         type: 'string',
         description: 'Ex: Chairman, Vice President of media club, etc.',
      }),
      defineField({
         name: 'projects',
         title: 'Projects',
         type: 'array',
         of: [{ type: 'reference', to: [{ type: 'project' }] }],
      }),
      defineField({
         name: 'images',
         title: 'Images',
         type: 'array',
         of: [{ type: 'image' }],
      }),
      defineField({
         name: 'socials',
         title: 'Socials',
         type: 'socials',
      }),
   ],
   preview: {
      select: {
         title: 'names',
         media: 'picture',
      },
   },
});
