import Image from "next/image";
import React from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { RAELIcon } from "../shared/icons";

const Header = () => {
  return (
    <div className="flex w-full dark:border-slate-500 items-center justify-between border-b-2 py-6">
      <div className=""></div>
      {/* <Image src={"/rael.svg"} height={40} width={100} alt="rael" /> */}
      <RAELIcon size={100} />
      <div className="flex gap-x-3 items-center">
        <MagnifyingGlassIcon className="w-6" />
        <BellIcon className="w-6" />
        <Image
          src={"/svgs/avatar.svg"}
          alt="avatar"
          height={40}
          width={40}
          className=" rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
