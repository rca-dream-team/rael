'use client';
import PText from '@/components/constants/PoppinText';
import RText from '@/components/constants/RighteousText';
import { MailIcon } from '@/components/icons';
import { IStudent } from '@/types/student.type';
import Image from 'next/image';
import { FaLink } from 'react-icons/fa';
import { IoLogoBehance, IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';

export interface MemberProps {
   member: IStudent;
}

const Member = ({ member }: MemberProps) => {
   const images = new Array<string>(4).fill('').map((it, i) => `/images/mem${i}`);
   return (
      <div className="max-w-[1000px] pb-4 w-full rounded-xl bg-white dark:bg-[#060911] gap-y-11 px-11 flex-col flex">
         <div className="flex py-2 items-center justify-center">
            <Image src={member?.picture ?? '/images/member.png'} height={300} width={300} alt="Member" />
            <div className="flex flex-col gap-y-7 w-full px-11">
               <div className="flex flex-col">
                  <RText className=" text-xl uppercase">{member.names}</RText>
                  <PText className=" font-medium uppercase">{member.leaderTitle}</PText>
               </div>
               <PText className=" text-sm">{member?.occupation?.map((ocu) => <span key={ocu}>{ocu}</span>)}</PText>
            </div>
         </div>
         <PText className="text-sm">{member?.bio}</PText>
         <div className="grid grid-cols-3 w-full gap-6">
            {images?.map((im, i) => (
               <Image
                  src={`/images/mem${i + 1}.png`}
                  alt="Alt"
                  className=" min-w-full rounded-xl overflow-hidden object-cover h-full"
                  key={i}
                  width={300}
                  height={300}
               />
            ))}
         </div>
         <div className="flex w-full gap-x-4 dark:text-white items-center justify-center">
            {/* <MdMail size={30} className=" cursor-pointer" /> */}
            <MailIcon size={30} className="cursor-pointer" />
            <IoLogoGithub size={30} className=" cursor-pointer" />
            <IoLogoLinkedin size={30} className=" cursor-pointer" />
            <IoLogoBehance size={30} className=" cursor-pointer" />
            <IoLogoInstagram size={30} className=" cursor-pointer" />
            <IoLogoFacebook size={30} className=" cursor-pointer" />
            <FaLink size={25} className=" cursor-pointer" />
         </div>
      </div>
   );
};

export default Member;
