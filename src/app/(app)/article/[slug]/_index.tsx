'use client';
import { addComment } from '@/app/actions';
import Comment from '@/components/shared/Comment';
import RichContent from '@/components/shared/RichContent';
import { SubmitButton } from '@/components/ui/submit-button';
import { urlFor } from '@/sanity/sanity.client';
import { News } from '@/types/news';
import { Prisma } from '@prisma/client';
import Link from 'next/link';
import { useRef } from 'react';
import { BiArrowBack } from 'react-icons/bi';

interface Props {
   news: News;
   comments: Prisma.$CommentPayload['scalars'][];
}

const IndexPage = ({ news, comments }: Props) => {
   const ref = useRef<HTMLFormElement>(null);
   // console.log('news', news);
   const onSubmit = addComment.bind(null, news._id);
   return (
      <div
         className={` w-full flex top-0 flex-col items-center min-hfull flex-1 bg-opacity-10 relative`}
         style={{ background: 'url(' + urlFor(news.image).url() + ')', backgroundSize: 'cover' }}
      >
         <div className="absolute top-0 left-0 w-full h-full dark:bg-black/90 bg-white/95 z-0"></div>
         <div className=" w-full p-6 flex flex-col max-w-4xl z-10">
            <Link href="/" className=" font-semibold mb-6 flex items-center gap-2 text-lg">
               <BiArrowBack />
               All news
            </Link>
            <div className="flex w-full flex-col font-poppins">
               <RichContent content={news.content} />
               <h1 className="text-xl font-semibold mt-6">Comments ({comments.length})</h1>
               <span className="text-sm dark:text-gray-200">Comments are anonymous, so feel free to share your thoughts</span>
               <form
                  action={async (formData) => {
                     await onSubmit(formData);
                     ref.current?.reset();
                  }}
                  className="gap-3 mt-4 w-full flex flex-col items-start"
               >
                  <textarea
                     name="body"
                     id="body"
                     className=" w-full h-20 p-2 border bg-transparent border-gray-300 rounded-lg"
                     placeholder="What's your take on this news 🤔? Leave a comment "
                  ></textarea>
                  <SubmitButton className=" mr-auto">Add Comment</SubmitButton>
               </form>
               <div className=" flex flex-col gap-y-6 mt-6 w-full">
                  {comments.map((comment) => (
                     <Comment key={comment.id} comment={comment} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default IndexPage;
