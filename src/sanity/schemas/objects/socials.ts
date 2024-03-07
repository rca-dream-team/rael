import { defineType } from 'sanity';

export default defineType({
   name: 'socials',
   title: 'Socials',
   type: 'object',
   fields: [
      {
         name: 'linkedIn',
         title: 'LinkedIn',
         type: 'url',
      },
      {
         name: 'twitter',
         title: 'Twitter',
         type: 'url',
      },
      {
         name: 'facebook',
         title: 'Facebook',
         type: 'url',
      },
      {
         name: 'instagram',
         title: 'Instagram',
         type: 'url',
      },
      {
         name: 'github',
         title: 'Github',
         type: 'url',
      },
      {
         name: 'portfolio',
         title: 'Portfolio',
         type: 'url',
      },
      {
         name: 'behance',
         title: 'Behance',
         type: 'url',
      },
      {
         name: 'dribbble',
         title: 'Dribbble',
         type: 'url',
      },
   ],
});
