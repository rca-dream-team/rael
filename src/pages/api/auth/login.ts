import { sanityClient } from '@/sanity/sanity.client';
import Response from '@/types/response';
import { misApi } from '@/utils/axios.config';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === 'POST') {
      const { token } = req.body;
      if (!token) {
         return res.status(400).json({ message: 'Token is required' });
      }
      try {
         const _res = await misApi.get('/auth/profile', {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         const profile = _res.data.data;
         // console.log('profile', profile);
         const student = await sanityClient.fetch(`*[_type == 'student' && email == $email][0]`, {
            email: profile.user?.email,
         });

         if (!student) {
            const newStudent = await createStudent(profile);
            console.log('new student', newStudent);
            return res.status(200).json(new Response(profile, undefined, 'Logged in', true));
         }
         return res.status(200).json(new Response(profile, undefined, 'Logged in', true));
      } catch (error: any) {
         console.error('Error logging in', error);
         return res.status(500).json(new Response(undefined, error, 'Error logging in'));
      }
   }
}

const createStudent = async (profile: any) => {
   const student = await sanityClient.create({
      _type: 'student',
      names: profile.person.firstName + ' ' + profile.person.lastName,
      email: profile.person.email,
      currentClass: profile?.person?.currentClass?.className,
   });
   return student;
};
