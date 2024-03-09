import Member, { MemberProps } from '@/app/(app)/members/[id]/member';
import Modal from '@/components/shared/Modal';
import { getStudentByIdQuery } from '@/sanity/queries/student.query';
import { sanityClient } from '@/sanity/sanity.client';
import { IStudent } from '@/types/student.type';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

interface MemberModalPageProps {
   params: {
      id: string;
   };
   searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
   { params, searchParams }: MemberModalPageProps,
   parent: ResolvingMetadata,
): Promise<Metadata> {
   const id = params.id;
   // optionally access and extend (rather than replace) parent metadata
   // const previousImages = (await parent).openGraph?.images || [];
   const student: IStudent = await sanityClient.fetch(getStudentByIdQuery, { id });
   console.log('student', student);

   return {
      title: `${student.names ?? 'RCA Member'} - RAEL`,
      description: student.bio,
      // openGraph: {
      //    images: [student.picture, ...[student?.images].map((it) => ({ url: it } as any))],
      // },
   };
}

export default async function MemberModal({ params }: MemberModalPageProps) {
   const id = params?.id;
   if (!id) notFound();
   const member = await sanityClient.fetch(getStudentByIdQuery, { id });

   return (
      <Modal>
         <Member member={member} />
      </Modal>
   );
}
