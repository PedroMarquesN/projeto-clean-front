import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ACTION
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => router.push('/login')}>
            Login
          </Button>
          <Button color="inherit" onClick={() => router.push('/register')}>
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
