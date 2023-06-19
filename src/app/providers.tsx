"use client";
import React from "react";
import AppProvider from "../contexts/AppProvider";
import { MantineProvider } from "@mantine/core";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider>
      <AppProvider>{children}</AppProvider>
    </MantineProvider>
  );
};

export default Providers;
