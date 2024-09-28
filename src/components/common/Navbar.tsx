// src/components/common/Navbar.tsx

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Rental Requests', path: '/rental-requests' },
    { text: 'Jobs', path: '/jobs' },
    { text: 'Create Job', path: '/jobs/new' },
    { text: 'Settings', path: '/settings' },
  ];

  // Get the current page title based on the path
  const currentRoute = menuItems.find((item) => item.path === location.pathname);
  const pageTitle = currentRoute ? currentRoute.text : 'Same Day Ramps';

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton edge="start" color="primary" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'left' }}>
                {pageTitle}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
                {pageTitle}
              </Typography>
              <Box>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    color="primary"
                    onClick={() => navigate(item.path)}
                    style={{ marginLeft: '1rem' }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <List style={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                  setDrawerOpen(false);
                }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;