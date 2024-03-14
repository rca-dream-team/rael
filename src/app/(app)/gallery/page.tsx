'use client';
import PText from '@/components/constants/PoppinText';
import RText from '@/components/constants/RighteousText';
import CardComponent from '@/components/shared/Card';

const ClassifiedPage = () => {
   return (
      <>
         <div className=" w-[80%] ">
            <RText className="text-2xl">15th March</RText>
            <div className="mt-5 flex gap-6 flex-wrap">
               <CardComponent />
               <CardComponent />
               <CardComponent />
               <CardComponent />
               <CardComponent />
            </div>
         </div>
      </>
   );
};

export default ClassifiedPage;
