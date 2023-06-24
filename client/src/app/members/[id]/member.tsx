import PText from "@/components/shared/PoppinText";
import RText from "@/components/shared/RighteousText";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { MdMail } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import {
  IoLogoBehance,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLink,
} from "react-icons/io5";
import { MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Nick Singizwa - Overview",
  description: "Get to know Nick's Achievements in RCA",
};

export interface MemberProps {
  data: {
    image: string;
    title: string;
    name: string;
    desc: string;
    bio: string;
    images?: string[];
  } | null;
}

const Member = ({ data }: MemberProps) => {
  return (
    <div className="max-w-[1000px] pb-4 w-full rounded-xl bg-white dark:bg-[#060911] gap-y-11 px-11 flex-col flex">
      <div className="flex py-2 items-center justify-center">
        <Image
          src={data?.image ?? "/images/member.png"}
          height={300}
          width={300}
          alt="Member"
        />
        <div className="flex flex-col gap-y-7 w-full px-11">
          <div className="flex flex-col">
            <RText className=" text-xl uppercase">{data?.name}</RText>
            <PText className=" font-medium uppercase">{data?.title}</PText>
          </div>
          <PText className=" text-sm">{data?.bio}</PText>
        </div>
      </div>
      <PText className="text-sm">{data?.desc}</PText>
      <div className="grid grid-cols-3 w-full gap-6">
        {data?.images?.map((im, i) => (
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
