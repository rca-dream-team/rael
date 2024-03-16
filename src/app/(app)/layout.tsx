'use client';
import React from 'react';
import Header from '../../components/shared/Header';
import NavBar from '../../components/shared/navbar';
import Footer from '@/components/shared/Footer';

interface MainAppLayoutProps {
   children: React.ReactNode;
}

const MainAppLayout = ({ children }: MainAppLayoutProps) => {
   return (
      <main className="flex dark:bg-black w-full dark:text-white min-h-screen flex-col items-center gap-y-6 px-[5%]">
         <Header />
         {children}
         {/* <div className="flex fixed bottom-0"> */}
         <Footer />
         {/* </div> */}
      </main>
   );
};

export default MainAppLayout;
