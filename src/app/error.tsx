'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
   useEffect(() => {
      // Log the error to an error reporting service
      console.error(error);
   }, [error]);

   return (
      <div className=" gap-y-2 w-full h-screen justify-center items-center flex flex-col">
         <h2>Something went wrong!</h2>
         <button
            className="bg-black border-2 border-white hover:border-black truncate stylbtn text-white rounded-[3em] py-3 px-8"
            onClick={
               // Attempt to recover by trying to re-render the segment
               () => reset()
            }
         >
            <p className="z-50 relative">Try again</p>
         </button>
      </div>
   );
}
