"use client";
import React from "react";
import BG from "./BG";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = React.useState(true);
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === "/auth/login") {
      setIsLogin(true);
    } else if (pathname === "/auth/signup") {
      setIsLogin(false);
    }
  }, [pathname]);

  return (
    <div className="flex w-full bg-white max-h-screen">
      <div className="w-[45%] relative flex bg-black h-screen object-cover">
        <BG />
        <div className=" absolute right-0 flex flex-col bg-white trun -translate-y-[50%] top-[50%]">
          <div className=" absolute left-0 w-1/2 h-full bg-black "></div>
          <div
            className={`px-11 z-10 py-5 bg-black ${
              isLogin ? "rounded-br-[3em]" : ""
            }`}
          ></div>
          <Link
            href="/auth/login"
            className={` z-10 px-11 text- py-5 ${
              !isLogin
                ? "rounded-br-[3em] bg-black text-white"
                : "rounded-l-[3em] bg-white text-black"
            } `}
          >
            LOGIN
          </Link>
          <Link
            href="/auth/signup"
            className={` z-10 px-11 text- py-5 ${
              isLogin
                ? "rounded-tr-[3em] text-white bg-black"
                : "rounded-l-[3em] text-black bg-white"
            } `}
          >
            SIGNUP
          </Link>
          <div
            className={`px-11 z-10 border-none border-black border-0 py-5 bg-black ${
              !isLogin ? "rounded-tr-[3em]" : ""
            }`}
          ></div>
        </div>
      </div>
      <div className="relative flex flex-col items-center w-[55%]">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
