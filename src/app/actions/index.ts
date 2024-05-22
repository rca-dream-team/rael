'use server';

import prisma from '@/lib/prisma';
import { decodeToken } from '@/utils';
import { faker } from '@faker-js/faker';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

type params = {
   postId: string;
   userId?: string;
};

export const addComment = async (params: params, formData: FormData) => {
   const { postId, userId } = params;
   if (!formData.get('body') || !postId || formData.get('body')?.toString().trim() === '') {
      return null;
   }
   const token = cookies().get('rael_token');
   if (!token) {
      console.log('no token', token);
      return null;
   }
   console.log('userId', userId);
   const user = decodeToken(token.value);
   const comment = await prisma.comment.create({
      data: {
         postId,
         userId: userId || user.id,
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
