import MainAppLayout from "@/components/layouts/MainAppLayout";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MembersPage = async () => {
  return (
    <MainAppLayout>
      <div className="w-[90%]">
      <h2 className="font-bold text-4xl">Staff</h2>
      <div className="grid grid-cols-5 w-full gap-2 mt-4">
        
        {new Array(10).fill(0).map((_, i) => (
          <Link key={i} href={`/members/${i + 1}`}>
            <div className="mt-4 bg-gray-100 w-[200px] h-[200px] rounded-xl border border-slate-600 p-2 text-center">
            <Image
              src={"/images/mem3.png"}
              width={200}
              height={200}
              className="object-cover"
              alt="member"
            />
            <p className="text-md font-bold mt-1">SINGIZWA Nick</p>
            <span className="text-sm text-gray-600">Football Captain</span>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </MainAppLayout>
  );
};

export default MembersPage;
