import PText from "@/components/shared/PoppinText";
import RText from "@/components/shared/RighteousText";
import React from "react";
import Image from "next/image";

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
    <div className="max-w-[1000px] w-full rounded-xl bg-white dark:bg-black gap-y-11 px-11 flex-col flex">
      <div className="flex items-center justify-center">
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
            className=" w-full object-cover h-full"
            key={i}
            width={300}
            height={300}
          />
        ))}
      </div>
    </div>
  );
};

export default Member;
