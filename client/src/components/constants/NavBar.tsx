"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  // {
  //   name: "RCA DAILY",
  //   href: "/",
  // },
  {
    name: "RCA DAILY",
    href: ["/rca-daily", "/"],
  },
  {
    name: "CLASSIFIED",
    href: ["/classified"],
  },
  {
    name: "TIMELINE",
    href: ["/timeline"],
  },
  {
    name: "MEMBERS",
    href: ["/members"],
  },
];

const NavBar = () => {
  const [path, setPath] = React.useState("");
  const pathname = usePathname();

  React.useEffect(() => {
    setPath(pathname ?? "");
  }, [pathname]);
  return (
    <div className="flex flex-col w-full overflow-x-auto sticky top-0 sm:items-center">
      <div className=" border-2 bg-white dark:bg-black dark:border-slate-900/50 overflow-hidden flex items-center rounded-[2em] max-w-[800px] w-fit">
        {/* <Link
        href={"#"}
        className="py-3 w-36 flex justify-center items-center bg-black rounded-[3em] text-white"
      >
        RCA DAILY
      </Link> */}
        {links.map((link) => {
          return (
            <Link
              // @ts-ignore
              href={link.href[0]}
              key={link.name}
              className={`2sm:py-3  py-2 whitespace-nowrap px-3 2sm:text-base text-sm rounded-[3em] 2sm:px-5 ${
                link.href.includes(path) || path.includes(link.href[0])
                  ? "dark:bg-white dark:text-black bg-black text-white"
                  : "dark:bg-black dark:text-white bg-white text-black"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
