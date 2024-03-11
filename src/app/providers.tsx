'use client';
import React from 'react';
import AppProvider from '../contexts/AppProvider';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import AuthProvider from '@/contexts/AuthProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
   return (
      <MantineProvider
         theme={{
            colors: {
               brand: ['#1f1e1e', '#1f1e1e', '#1f1e1e', '#1f1e1e', '#1f1e1e', '#1f1e1e', '#000', '#000010', '#1f1e1e', '#1f1e1e'],
            },
            primaryColor: 'brand',
         }}
      >
         <Notifications position="top-right" />
         <AuthProvider>
            <AppProvider>{children}</AppProvider>
         </AuthProvider>
      </MantineProvider>
   );
};

export default Providers;
