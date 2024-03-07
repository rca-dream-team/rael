import React from 'react';
import Header from '../../components/shared/Header';
import NavBar from '../../components/shared/NavBar';

interface MainAppLayoutProps {
   children: React.ReactNode;
}

const MainAppLayout = ({ children }: MainAppLayoutProps) => {
   return (
      <main className="flex dark:bg-black w-full dark:text-white min-h-screen flex-col items-center gap-y-6 px-[5%]">
         <Header />
         {children}
      </main>
   );
};

export default MainAppLayout;
