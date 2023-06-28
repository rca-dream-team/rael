import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login - RAEL",
  description: "Login to your RAEL account",
};

function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default Layout;
