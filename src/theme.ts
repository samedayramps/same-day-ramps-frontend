// src/theme.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007AFF', // iOS blue color
    },
    background: {
      default: '#F9F9F9', // Light gray background
    },
    text: {
      primary: '#000000',
      secondary: '#8E8E93', // iOS secondary text color
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'SF Pro Text',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h6: {
      fontWeight: 600,
      fontSize: '17px',
      lineHeight: '22px',
    },
    body1: {
      fontSize: '17px',
      lineHeight: '22px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#F9F9F9',
          color: '#000000',
          boxShadow: 'none',
          borderBottom: '1px solid #C6C6C8',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '44px', // iOS Navbar height
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // iOS button style
        },
        contained: {
          boxShadow: 'none',
          backgroundColor: '#007AFF',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#005BB5',
          },
        },
        outlined: {
          borderColor: '#007AFF',
          color: '#007AFF',
          '&:hover': {
            borderColor: '#005BB5',
            color: '#005BB5',
            backgroundColor: 'rgba(0, 122, 255, 0.1)',
          },
        },
      },
    },
  },
});

export default theme;