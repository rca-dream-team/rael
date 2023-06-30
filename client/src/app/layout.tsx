import { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { NavigationEvents } from "@/components/routing/navigation-events";
import { Suspense } from "react";
import ProgressBar from "@/components/routing/ProgressBar";

// export const poppins = Poppins({
//   weight: ["400", "500", "600", "700", "800"],
//   subsets: ["latin"],
// });
// export const righteous = Righteous({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAEL",
  description: "All you need to know about RCA and the RCA community",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://rael.vercel.app/",
    siteName: "RAEL",
    description: "All you need to know about RCA and the RCA community",
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </head>
      <body className={""}>
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  );
}
