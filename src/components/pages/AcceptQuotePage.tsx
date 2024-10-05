import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, CircularProgress } from '@mui/material';
import { jobsApi } from '../../services/api';

const AcceptQuotePage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    const acceptQuote = async () => {
      try {
        if (jobId) {
          await jobsApi.acceptQuote(jobId);
          setStatus('success');
        } else {
          throw new Error('Job ID is missing');
        }
      } catch (error) {
        console.error('Error accepting quote:', error);
        setStatus('error');
      }
    };

    acceptQuote();
  }, [jobId]);

  if (status === 'loading') {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (status === 'error') {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">
          There was an error accepting the quote. Please try again or contact support.
        </Typography>
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
      <Typography variant="h4" gutterBottom>
        Quote Accepted
      </Typography>
      <Typography variant="body1">
        Thank you for accepting the quote. We will be in touch shortly to proceed with your ramp rental.
      </Typography>
    </Box>
  );
};

export default AcceptQuotePage;