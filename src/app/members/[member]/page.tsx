"use client";
import MainAppLayout from "@/components/layouts/MainAppLayout";
import { useRouter, useParams } from "next/navigation";
import React from "react";

const MemberPage = () => {
  const params = useParams();
  return (
    <MainAppLayout>
      <div>MemberPage {params?.member} </div>
    </MainAppLayout>
  );
};

export default MemberPage;
