import { sanityClient } from '../../sanity.client';
import { groq } from 'next-sanity';
import { ValidationContext, defineField, defineType } from 'sanity';

const isUniqueColour = (student: any, context: ValidationContext) => {
   const { document } = context;

   const id = document?._id.replace(/^drafts\./, '');

   const params = {
      draft: `drafts.${id}`,
      published: id,
      student,
   };

   /* groq */
   const query = groq`!defined(*[
     _type == 'student' &&
     !(_id in [$draft, $published]) &&
     email == $student
   ][0]._id)`;

   return sanityClient.fetch(query, params);
};

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
         validation: (Rule) =>
            Rule.required().custom(async (value, context) => {
               const isUnique = await isUniqueColour(value, context);
               if (!isUnique) return 'Email is owned by other student.';
               return true;
            }),
         description: "Student email should not be duplicated. I can't be assigned to more than 1 student",
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
         name: 'pictureUrls',
         title: 'Picture URLs',
         type: 'array',
         of: [{ type: 'url' }],
      }),
      defineField({
         name: 'bio',
         title: 'Bio',
         type: 'string',
      }),
      defineField({
         name: 'classes',
         title: 'Classes',
         type: 'reference',
         to: [{ type: 'class' }],
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
