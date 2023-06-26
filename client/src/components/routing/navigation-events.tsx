"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ProgressBar from "./ProgressBar";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [path, setPath] = useState("");

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return null;
  // return <ProgressBar />;
}
