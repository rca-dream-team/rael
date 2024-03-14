'use client';
import React from 'react';
import { Card, Image, Text, Group } from '@mantine/core';
import { News } from '@/types/news';
import Link from 'next/link';

interface CardComponentProps {
   data: News;
}

const CardComponent = ({ data }: CardComponentProps) => {
   return (
      <Link href={`/article/${data.slug.current}`} className=" hover:scale-105 duration-300">
         <Card shadow="sm" padding="lg" radius="md" withBorder className="w-72 h-72">
            <Card.Section component="a">
               <Image
                  src={data.image ?? 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png'}
                  height={160}
                  alt={data.title}
               />
            </Card.Section>

            <Group className=" justify-center" mt="md" mb="xs">
               <Text fw={500}>{data.title}</Text>
            </Group>

            <Text size="sm" c="dimmed">
               {data.excerpt.slice(0, 100)}...
            </Text>
         </Card>
      </Link>
   );
};

export default CardComponent;
