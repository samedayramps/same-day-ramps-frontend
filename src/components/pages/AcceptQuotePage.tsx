import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Box, CircularProgress, Button } from '@mui/material';
import { jobsApi } from '../../services/api';

const AcceptQuotePage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'invalid_stage'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const acceptQuote = async () => {
      try {
        if (jobId) {
          const response = await jobsApi.acceptQuote(jobId);
          console.log('Quote acceptance response:', response);
          setStatus('success');
        } else {
          throw new Error('Job ID is missing');
        }
      } catch (error) {
        console.error('Error accepting quote:', error);
        if (error instanceof Error && error.message.includes('Invalid job stage')) {
          setStatus('invalid_stage');
        } else {
          setStatus('error');
          if (error instanceof Error) {
            setErrorMessage(error.message);
          } else {
            setErrorMessage('An unknown error occurred');
          }
        }
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

  if (status === 'invalid_stage') {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error" gutterBottom>
          This quote is no longer available for acceptance.
        </Typography>
        <Typography variant="body1" mt={2}>
          The job may have progressed to a different stage or the quote may have expired.
        </Typography>
        <Typography variant="body1" mt={2}>
          Please contact our support team for assistance.
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary" sx={{ mt: 3 }}>
          Return to Home
        </Button>
      </Box>
    );
  }

  if (status === 'error') {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error" gutterBottom>
          There was an error accepting the quote.
        </Typography>
        <Typography variant="body1" color="error">
          Error details: {errorMessage}
        </Typography>
        <Typography variant="body1" mt={2}>
          Please try again or contact support.
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary" sx={{ mt: 3 }}>
          Return to Home
        </Button>
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
      <Button component={Link} to="/" variant="contained" color="primary" sx={{ mt: 3 }}>
        Return to Home
      </Button>
    </Box>
  );
};

export default AcceptQuotePage;