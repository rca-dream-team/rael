import React from "react";
import Header from "../shared/Header";
import NavBar from "../shared/NavBar";

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout = ({ children }: MainAppLayoutProps) => {
  return (
    <main className="flex dark:bg-black w-full dark:text-white min-h-screen flex-col items-center gap-y-6 px-[5%]">
      <Header />
      <NavBar />
      {children}
    </main>
  );
};

export default MainAppLayout;
