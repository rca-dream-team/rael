"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // const url = `${pathname}?${searchParams}`;
    // console.log(url);
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return (
    <div className=" fixed h-screen dark:bg-black z-50 bg-white flex items-center justify-center dark:text-white w-full ">
      Loading...
    </div>
  );
}
