import { Center, SegmentedControl } from '@mantine/core';
import React from 'react';

type Category = 'classified' | 'unclassified';

interface Props {
   // eslint-disable-next-line no-unused-vars
   onChange: (category: Category) => void;
   value?: Category;
}

const CategoryChanger = ({ value, onChange }: Props) => {
   const [_value, setValue] = React.useState(value ?? 'unclassified');

   const handleChange = (value: Category) => {
      setValue(value);
      onChange(value);
   };

   return (
      <SegmentedControl
         data={[
            {
               value: 'classified',
               label: (
                  <Center title="classified">
                     <p>Classified</p>
                  </Center>
               ),
            },
            {
               value: 'unclassified',
               label: (
                  <Center title="unclassified">
                     <p>Unclassified</p>
                  </Center>
               ),
            },
         ]}
         value={_value}
         onChange={handleChange}
      />
   );
};

export default CategoryChanger;
