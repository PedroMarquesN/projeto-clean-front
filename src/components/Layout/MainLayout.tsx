import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Box } from '@mui/material';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
