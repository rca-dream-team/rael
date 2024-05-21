'use client';
import { Prisma } from '@prisma/client';
import React from 'react';
import Image from 'next/image';
import { ActionButton } from '../ui/action-icon';
import { BiTrash } from 'react-icons/bi';
import { deleteComment } from '@/app/actions';
import { useAuth } from '@/contexts/AuthProvider';

interface CommentProps {
   comment: Prisma.$CommentPayload['scalars'];
}

const Comment = ({ comment }: CommentProps) => {
   const { user } = useAuth();

   return (
      <div key={comment.id} className="flex items-start gap-2 w-full">
         <Image
            src={`https://ui-avatars.com/api/?name=${comment?.name ?? 'Anonymous'}`}
            width={40}
            height={40}
            alt={comment?.name ?? 'Anonymous'}
            className="rounded-full border"
         />
         {/* <div className="flex "></div> */}
         <div className="flex flex-col relative w-full rounded-md border border-gray-300 p-2 gap-y-2">
            <h1 className="font-semibold">{comment.name ?? 'Anonymous'}</h1>
            <p className="text-sm">{comment.body}</p>
            {user?._id === comment.userId && (
               <ActionButton
                  onClick={() => deleteComment(comment.id)}
                  color="red"
                  variant="transparent"
                  className=" absolute top-1 right-1"
               >
                  <BiTrash size={25} className=" text-red-400" />
               </ActionButton>
            )}
         </div>
      </div>
   );
};

export default Comment;
