import MainAppLayout from "@/components/layouts/MainAppLayout";
import Member, { MemberProps } from "./member";
import { notFound } from "next/navigation";

interface MemberPageProps {
  params: {
    id: string;
  };
}

const MemberPage = async ({ params }: MemberPageProps) => {
  const id = params?.id;
  // if (!id) notFound();
  const data: MemberProps["data"] = {
    name: "Nick Singizwa",
    desc: "Mizero Nick was part  of the class of 2023 that dually graduated  from Rwanda Coding Academy in August 2023 after a three academic year. He and his classmates joined RCA in January 2 020 . During his time at RCA, he played football and became the first captain to take the school team outside for a finals game against Nyabirasi in June 2023 .  He also was  a member of the RTB TEAM in 2022-2023 that helped build the TVET Management Portal . It is to be noted that Nick is the only captain who took the fotball team to an away game and a final",
    title: "Member of class of 2023",
    image: "/images/member.png",
    bio: "Football Captain",
    images: new Array<string>(4).fill("").map((it, i) => `/images/mem${i}`),
  };

  return (
    <MainAppLayout>
      <div className="flex flex-col items-center w-full py-6">
        <Member data={data} />
      </div>
    </MainAppLayout>
  );
};

export default MemberPage;
