'use client';
import { setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { FormEvent } from 'react';

export default function LoginForm() {
   const router = useRouter();
   const searchParams = useSearchParams();
   const redirect = searchParams?.get('redirect');
   const [loading, setLoading] = React.useState(false);
   const [rcaLoading, setRcaLoading] = React.useState(false);

   React.useEffect(() => {
      const getOauthToken = async () => {
         const token = searchParams?.get('token');
         if (!token) return;
         // const decoded = decodeToken(token);
         // console.log('decoded token', decoded);
         if (token) {
            setLoading(true);
            setRcaLoading(true);
            setCookie('mis_token', token, { maxAge: 60 * 60 * 24 });
            // await createUserFromToken(token);
            console.log('user created if not exists');
            window.location.href = (redirect as any) ?? '/';
         }
      };
      getOauthToken();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const loginWithRCA = () => {
      window.location.href = `http://rcaproj.com:9099/auth/login?redirect=${window.location.href}&oauth=true`;
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('login');
      setCookie('token', '1234');
      router.push((redirect as any) ?? '/');
   };
   return (
      <form onSubmit={handleSubmit} className={' flex-col w-full flex items-center gap-y-8 font-poppins '}>
         <button
            type="submit"
            onClick={loginWithRCA}
            className="bg-black border-2 border-white hover:border-black truncate stylbtn text-white rounded-[3em] py-3 px-8"
         >
            <p className="z-50 relative">Login With MIS</p>
         </button>
      </form>
   );
}
