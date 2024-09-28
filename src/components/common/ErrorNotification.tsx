import React, { useContext } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';
import { Snackbar, Alert } from '@mui/material';

const ErrorNotification: React.FC = () => {
  const { error, setError } = useContext(ErrorContext);

  const handleClose = () => {
    setError(null);
  };

  return (
    <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default ErrorNotification;