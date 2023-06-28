"use client";
import { useApp } from "@/contexts/AppProvider";
import { RouteType } from "next/dist/lib/load-custom-routes";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CLink = (props: LinkProps<RouteType>) => {
  const pathname = usePathname();
  const { setShowProgressBar } = useApp();

  const handleShowProgressBar = () => {
    if (pathname !== props.href) {
      setShowProgressBar(true);
    }
  };

  return (
    <Link onClick={handleShowProgressBar} {...props}>
      {props.children}
    </Link>
  );
};

export default CLink;
