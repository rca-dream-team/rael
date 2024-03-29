import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export const BlurImage = ({ src, alt, className }: { src: string; alt?: string; className?: string }) => {
   const [loaded, setLoaded] = useState(false);
   return (
      <Image
         src={src}
         height="500"
         width="500"
         onLoad={() => setLoaded(true)}
         className={cn(
            'object-contain object-top  inset-0 h-full transition duration-200',
            loaded ? 'blur-none' : 'blur-md',
            className,
         )}
         alt={alt ?? 'thumbnail'}
      />
   );
};

export default BlurImage;
