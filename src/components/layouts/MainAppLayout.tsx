import React from "react";

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout = ({ children }: MainAppLayoutProps) => {
  return <div className=" w-full flex flex-col">{children}</div>;
};

export default MainAppLayout;
