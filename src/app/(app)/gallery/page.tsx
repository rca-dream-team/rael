import RText from '@/components/constants/RighteousText';
import { GalleryIndex } from './_index';

const ClassifiedPage = () => {
   return (
      <>
         <div className=" w-[80%] ">
            <RText className="text-2xl">RCA Gallery</RText>
            <GalleryIndex />
         </div>
      </>
   );
};

export default ClassifiedPage;
