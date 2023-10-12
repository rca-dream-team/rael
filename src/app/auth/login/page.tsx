'use client';
import { CPasswordInput, CTextInput } from '@/components/shared/inputs';
import { PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { setCookie } from 'cookies-next';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function LoginForm() {
   const router = useRouter();
   const form = useForm({
      initialValues: { email: '', password: '' },
      validate: {
         email: (value) => (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ? null : 'Invalid Email'),
         password: (value) =>
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=|{}\[\]:;<>,.?/~])(?!.*\s).{8,}$/.test(value)
               ? null
               : 'A password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number',
      },
      validateInputOnBlur: true,
   });
   const searchParams = useSearchParams();
   const redirect = searchParams?.get('redirect');

   const handleSubmit = () => {
      console.log('login');
      setCookie('token', '1234');
      router.push((redirect as any) ?? '/');
   };
   return (
      <form onSubmit={form.onSubmit(handleSubmit)} className={' flex-col w-full flex items-center gap-y-8 font-poppins '}>
         <CTextInput type="Email" placeholder="Email" {...form.getInputProps('email')} />
         <CPasswordInput
            // type="Password"
            placeholder="Password"
            {...form.getInputProps('password')}
         />
         <button
            type="submit"
            className="bg-black border-2 border-white hover:border-black truncate stylbtn text-white rounded-[3em] py-3 px-8"
         >
            <p className="z-50 relative">Login</p>
         </button>
      </form>
   );
}
