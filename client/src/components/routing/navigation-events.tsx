"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ProgressBar from "./ProgressBar";
import { useApp } from "@/contexts/AppProvider";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [path, setPath] = useState("");
  const { setShowProgressBar } = useApp();

  useEffect(() => {
    setShowProgressBar(false);
  }, [pathname]);

  return null;
  // return <ProgressBar />;
}
