"use client";
import React from "react";
import AppProvider from "../contexts/AppProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default Providers;
