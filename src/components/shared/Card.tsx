import React from 'react';
import { Card, Image, Text, Group } from '@mantine/core';
const CardComponent = () => {
   return (
      <div>
         <Card shadow="sm" padding="lg" radius="md" withBorder className="w-72 h-72">
            <Card.Section component="a">
               <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Norway"
               />
            </Card.Section>

            <Group className=" justify-center" mt="md" mb="xs">
               <Text fw={500}>Nickman Football captain helps the team reach the peace cup finals</Text>
            </Group>

            <Text size="sm" c="dimmed">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perferendis illum illo incidunt. Quaerat fugit
               illo, non sapiente quas placeat alias repudiandae provident, cupiditate amet blanditiis labore ut, quidem magni?
            </Text>
         </Card>
      </div>
   );
};

export default CardComponent;
