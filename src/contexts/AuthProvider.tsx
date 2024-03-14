import { studentFields } from '@/sanity/queries/student.query';
import { sanityClient } from '@/sanity/sanity.client';
import { IStudent } from '@/types/student.type';
import { decodeToken } from '@/utils';
import { getCookie } from 'cookies-next';
import React, { ReactNode, useContext, useEffect } from 'react';

interface AuthContextProps {
   user: IStudent | null;
   setUser: React.Dispatch<React.SetStateAction<any>>;
   getProfile: () => Promise<any>;
}

const AuthContext = React.createContext<AuthContextProps>({
   user: null,
   setUser: () => {},
   getProfile: () => Promise.resolve(),
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
   const [user, setUser] = React.useState<IStudent | null>(null);

   const getProfile = async () => {
      try {
         const decoded = decodeToken();
         console.log('decoded token', decoded);
         const role = decoded.role ?? getCookie('user_type');
         const schema = role?.toString().toLowerCase() === 'student' ? 'student' : 'staff';
         const res = await sanityClient.fetch(
            `*[_type == '${schema}' && email == $email][0] {
            ${studentFields}
         }`,
            {
               email: decoded?.email,
            },
         );
         console.log('profile', res);
         setUser(res);
      } catch (error) {
         console.error('Error getting profile', error);
      }
   };

   useEffect(() => {
      getProfile();
   }, []);

   return <AuthContext.Provider value={{ user, setUser, getProfile }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
