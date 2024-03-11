import { getStudentByIdQuery } from '@/sanity/queries/student.query';
import { sanityClient } from '@/sanity/sanity.client';
import { IStudent } from '@/types/student.type';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Member from './member';

interface MemberPageProps {
   params: {
      id: string;
   };
   searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params, searchParams }: MemberPageProps, parent: ResolvingMetadata): Promise<Metadata> {
   const id = params.id;
   // optionally access and extend (rather than replace) parent metadata
   // const previousImages = (await parent).openGraph?.images || [];
   const student = await sanityClient.fetch(getStudentByIdQuery, { id });
   console.log('student', student);

   return {
      title: `${student.names ?? 'RCA Member'} - RAEL`,
      description: student.bio,
      // openGraph: {
      //    images: [student.picture, ...[student?.images].map((it) => ({ url: it } as any))],
      // },
   };
}

const getMember = async (id: string) => {
   const member = await sanityClient.fetch(getStudentByIdQuery, { id });
   return member;
};

const MemberPage = async ({ params }: MemberPageProps) => {
   const id = params?.id;
   if (!id) notFound();
   const member = await getMember(id);

   return (
      <>
         <div className="flex flex-col items-center w-full py-6">
            <Member member={member} />
         </div>
      </>
   );
};

export default MemberPage;
