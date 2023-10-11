import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
   name: 'default',
   title: 'rael-cms',

   projectId: 'rrmy9xks',
   dataset: 'production',
   basePath: '/studio',
   plugins: [deskTool(), visionTool()],

   schema: {
      types: schemaTypes,
   },
});
