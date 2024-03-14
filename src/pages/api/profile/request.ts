import { fetchProfileRequest } from '@/sanity/queries/requests';
import { sanityClient } from '@/sanity/sanity.client';
import Response from '@/types/response';
import { decodeToken } from '@/utils';
import { requestProfile } from '@/utils/funcs/fetch';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === 'PUT') {
      try {
         const { request, requester } = req.body;
         if (!request || !requester) {
            return res.json({ message: 'Enter all required parameters' });
         }
         const data = await requestProfile(request, requester);
         res.json({ data });
      } catch (error: any) {
         console.log('error', error);
         res.status(400).json(new Response(null, error, 'Error requesting profile'));
      }
   }
   if (req.method === 'GET') {
      try {
         const token = req.cookies.token;
         if (!token) {
            return res.json({ message: 'Unauthorized' });
         }
         const decoded = decodeToken(token);
         console.log('---decoded---', decoded);
         if (!decoded) {
            return res.json({ message: 'Unauthorized' });
         }
         const existingRequest = await fetchProfileRequest(decoded.email);
         res.json({ data: existingRequest, message: 'Profile request' });
      } catch (error: any) {
         console.log('error', error);
         res.status(400).json(new Response(null, error, 'Error getting profile request'));
      }
   }
}
