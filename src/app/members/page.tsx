import MainAppLayout from "@/components/layouts/MainAppLayout";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MembersPage = async () => {
  return (
    <MainAppLayout>
      <div className="grid grid-cols-4 w-full gap-4 mt-4">
        {new Array(10).fill(0).map((_, i) => (
          <Link key={i} href={`/members/${i + 1}`}>
            <Image
              src={"/images/mem3.png"}
              width={300}
              height={300}
              className=" object-cover"
              alt="member"
            />
          </Link>
        ))}
      </div>
    </MainAppLayout>
  );
};

export default MembersPage;
