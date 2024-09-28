// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import store from './stores/store';
import { Provider } from 'react-redux';
import { ErrorProvider } from './contexts/ErrorContext';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { CssBaseline } from '@mui/material';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Create root using ReactDOM.createRoot
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ErrorProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Resets default styling */}
            <App />
          </ThemeProvider>
        </ErrorProvider>
      </Provider>
    </React.StrictMode>
  );
}