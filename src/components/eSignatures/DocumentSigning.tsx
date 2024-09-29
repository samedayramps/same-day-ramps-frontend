import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { jobsApi } from '../../services/api';

interface Props {
  jobId: string;
}

const DocumentSigning: React.FC<Props> = ({ jobId }) => {
  const [loading, setLoading] = useState(false);

  const handleInitiateSigning = async () => {
    setLoading(true);
    try {
      const response = await jobsApi.initiateESignaturesSigning(jobId);
      // Redirect the user to the signing URL
      window.location.href = response.data.signingUrl;
    } catch (error) {
      console.error('Failed to initiate document signing:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleInitiateSigning}
      disabled={loading}
    >
      {loading ? <CircularProgress size={24} /> : 'Sign Document'}
    </Button>
  );
};

export default DocumentSigning;