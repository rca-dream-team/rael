'use server';

import prisma from '@/lib/prisma';
import { decodeToken } from '@/utils';
import { faker } from '@faker-js/faker';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const addComment = async (postId: string, formData: FormData) => {
   const token = cookies().get('rael_token');
   if (!token) {
      console.log('no token', token);
      return null;
   }
   const user = decodeToken(token.value);
   const comment = await prisma.comment.create({
      data: {
         postId,
         userId: user.id,
         name: faker.person.firstName() + ' ' + faker.person.lastName(),
         body: formData.get('body') as string,
      },
   });
   console.log('comment', comment);
   revalidateTag(`news-${postId}`);
   return comment;
};

export const deleteComment = async (id: string) => {
   console.log('delete comment', id);
   const comm = await prisma.comment.delete({
      where: {
         id,
      },
   });
   revalidateTag(`news-${comm.postId}`);
   return comm;
};
