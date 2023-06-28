"use client";
import React from "react";
import AppProvider from "../contexts/AppProvider";
import { MantineProvider } from "@mantine/core";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider
      theme={{
        colors: {
          brand: [
            "#F0BBDD",
            "#ED9BCF",
            "#EC7CC3",
            "#ED5DB8",
            "#F13EAF",
            "#F71FA7",
            "#000",
            "#E00890",
            "#C50E82",
            "#AD1374",
          ],
        },
        primaryColor: "brand",
      }}
    >
      <AppProvider>{children}</AppProvider>
    </MantineProvider>
  );
};

export default Providers;
