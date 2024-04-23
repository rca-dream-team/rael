import React from 'react';
import PText from '../constants/PoppinText';

interface Props {
   hasDark?: boolean;
}

const Footer = ({ hasDark }: Props) => {
   return (
      <div
         className={`border-t-2 mt-auto bg-white ${hasDark && 'dark:bg-black'} flex items-center justify-center py-3 border-stone-500 dark:border-slate-50/10 w-full z-[51]`}
      >
         <PText noDark>Product of RCA #ClassOf2024</PText>
      </div>
   );
};

export default Footer;
