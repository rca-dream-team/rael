import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className=" border-2 flex items-center rounded-3xl max-w-[800px] w-fit">
      <Link
        href={"#"}
        className="py-3 w-36 flex justify-center items-center bg-black rounded-[3em] text-white"
      >
        RCA DAILY
      </Link>
      <Link
        href={"#"}
        className="py-3 w-36 flex justify-center items-center bg-black rounded-[3em] text-white"
      >
        RCA DAILY
      </Link>
      <Link
        href={"#"}
        className="py-3 w-36 flex justify-center items-center bg-black rounded-[3em] text-white"
      >
        RCA DAILY
      </Link>
      <Link
        href={"#"}
        className="py-3 w-36 flex justify-center items-center bg-black rounded-[3em] text-white"
      >
        RCA DAILY
      </Link>
    </div>
  );
};

export default NavBar;
