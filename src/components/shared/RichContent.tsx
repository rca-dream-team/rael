import { urlFor } from '@/sanity/sanity.client';
import { Children, Content } from '@/types/news';
import Image from 'next/image';

const RichContent = ({ content }: { content: Content[] }) => {
   const SpanElement = ({ child }: { child: Children }) => {
      const { _key, _type, marks, text } = child;
      const styles = {
         textDecoration: marks.includes('underline') ? 'underline' : 'none',
         fontWeight: marks.includes('strong') ? 'bold' : 'normal',
         fontStyle: marks.includes('em') ? 'italic' : 'normal',
      };

      return (
         <span key={_key} className={marks.join(' ')} style={styles}>
            {text}
         </span>
      );
   };
   return (
      <div>
         {content?.map((c) => {
            if (c._type === 'block') {
               if (c.listItem) {
                  return (
                     <ul key={c._key} className="list-disc list-inside my-5">
                        {c.children?.map((child) => {
                           return (
                              <li key={child._key}>
                                 <SpanElement child={child} />
                              </li>
                           );
                        })}
                     </ul>
                  );
               }
               return (
                  <div key={c._key} className=" my-5">
                     {c.children?.map((child) => {
                        return <SpanElement key={child._key} child={child} />;
                     })}
                  </div>
               );
            } else if (c._type === 'image') {
               return <Image key={c._key} src={urlFor(c.asset).url()} alt={c?.asset?._ref ?? ''} width={1000} height={1000} />;
            }
         })}
      </div>
   );
};

export default RichContent;
