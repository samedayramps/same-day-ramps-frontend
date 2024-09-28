// src/components/layout/MainLayout.tsx

import React from 'react';
import Navbar from '../common/Navbar';
import { Box } from '@mui/material';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box component="main" mt={8}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;