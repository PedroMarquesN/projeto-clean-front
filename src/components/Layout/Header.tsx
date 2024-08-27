import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAuth } from '@/context/AuthContext';


const Navbar: React.FC = () => {
  const router = useRouter();
  const { token, signOut } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const open = Boolean(anchorEl);


  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };


  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };



  return (
    <AppBar position="static">
      <Toolbar>
      
        <Typography variant="h6" sx={{ flexGrow: 1 , cursor: 'pointer'}} onClick={() => router.push('/')}>
          ACTION
        </Typography>
        {!isAuthenticated  ? (
          <Box>
            <Button color="inherit" onClick={() => router.push('/login')}>
              Login
            </Button>
            <Button color="inherit" onClick={() => router.push('/register')}>
              Register
            </Button>
          </Box>
        ) : (
          <Box>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <SettingsIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => router.push('/dashboard/edit-profile')}>
                Editar Perfil
              </MenuItem>
              <MenuItem onClick={() => router.push('/dashboard')}>
                Dashboard
              </MenuItem>
              <MenuItem onClick={signOut}>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



