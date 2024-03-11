import { getCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';

export const decodeToken = () => {
   let data: any = null;
   try {
      const token = getCookie('mis_token');
      if (!token) {
         return data;
      }
      const decoded = jwtDecode(token.toString());
      data = decoded;
   } catch (error) {
      console.error('Error decoding token', error);
   }
   return data;
};