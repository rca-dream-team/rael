import { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import { Righteous } from 'next/font/google';
import React from 'react';

// export const poppins = Poppins({
//   weight: ["400", "500", "600", "700", "800"],
//   subsets: ["latin"],
// });
const righteous = Righteous({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
   metadataBase: new URL('http://194.163.167.131:2024/'),
   title: 'RAEL',
   description: 'All you need to know about RCA and the RCA community',
   openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://rael.vercel.app/',
      siteName: 'RAEL',
      description: 'All you need to know about RCA and the RCA community',
   },
};

export default function RootLayout(props: { children: React.ReactNode; modal: React.ReactNode }) {
   const { children, modal } = props;
   // console.log('children', props);

   return (
      <html lang="en">
         <head>
            <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
         </head>
         <body className={righteous.className}>
            <Providers>
               {children}
               {modal}
            </Providers>
         </body>
      </html>
   );
}
