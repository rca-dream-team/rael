'use client';
import React, { useState } from 'react';
import csvtojson from 'csvtojson';
import { Button, FileButton } from '@mantine/core';
import { sanityClient } from '@/sanity/sanity.client';

const FileUpload = () => {
   const [file, setFile] = useState<Blob | null>(null);

   const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFile(e.target?.files![0]);
   };

   const onFileUpload = async () => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async (e) => {
         const text = e.target?.result;
         const jsonObj = await csvtojson().fromString(text as string);
         console.log('jsonObj', jsonObj);
         const newJsonObj = jsonObj.map((item) => {
            return {
               _type: 'student',
               names: item.names,
               email: item.email,
               bio: item.bio,
               socials: {
                  github: item.github,
                  linkedIn: item.linkedIn,
                  twitter: item.twitter,
                  facebook: item.facebook,
                  instagram: item.instagram,
                  portfolio: item.portfolio,
               },
            };
         });
         // Send JSON to Sanity
         newJsonObj.forEach((item) => {
            sanityClient.create(item).then((res) => console.log('res', res));
         });
      };
      reader.readAsText(file);
   };

   return (
      <div>
         <input type="file" onChange={onFileChange} />
         <Button color="primary" className=" bg-blue-700 hover:bg-blue-950" onClick={onFileUpload}>
            Upload
         </Button>
      </div>
   );
};

export default FileUpload;
