import { getAllStudentsQuery } from '@/sanity/queries/student.query';
import { sanityClient } from '@/sanity/sanity.client';
import { Metadata } from 'next';
import Members from './_members';

export const revalidate = 15; // 15 seconds

const getMembers = async () => {
   const students = await sanityClient.fetch(getAllStudentsQuery);
   return students;
};

export const metadata: Metadata = {
   title: 'RCA Members - RAEL',
};

const MembersPage = async () => {
   const students = await getMembers();
   console.log('students', students);

   return (
      <>
         <div className="w-[90%]">
            <Members students={students} staffs={[]} />
         </div>
      </>
   );
};

export default MembersPage;
