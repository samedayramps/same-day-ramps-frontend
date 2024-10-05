import React, { useState } from 'react';
import { Button, Typography, Box, CircularProgress } from '@mui/material';
import { jobsApi } from '../services/api';
import axios from 'axios';

interface QuoteManagerProps {
  jobId: string;
}

const QuoteManager: React.FC<QuoteManagerProps> = ({ jobId }) => {
  const [quoteHtml, setQuoteHtml] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleGenerateQuote = async () => {
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);
    setQuoteHtml(null);
    try {
      await jobsApi.generateQuote(jobId);
      const response = await jobsApi.previewQuote(jobId);
      console.log('Preview response:', response);
      if (response.data && typeof response.data === 'string') {
        setQuoteHtml(response.data);
        setSuccessMessage('Quote generated successfully');
      } else {
        setError('Quote preview is empty or in an unexpected format');
        console.error('Unexpected preview response:', response);
      }
    } catch (err) {
      setError('Failed to generate quote');
      console.error('Error generating quote:', err);
    }
    setIsLoading(false);
  };

  const handleSendQuote = async () => {
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);
    try {
      const response = await jobsApi.sendGeneratedQuote(jobId);
      setSuccessMessage('Quote sent successfully!');
      console.log('Send quote response:', response);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(`Failed to send quote: ${err.response?.data?.message || err.message}`);
        console.error('Error sending quote:', err.response?.data || err);
      } else {
        setError('An unexpected error occurred while sending the quote');
        console.error('Unexpected error:', err);
      }
    }
    setIsLoading(false);
  };

  return (
    <Box>
      <Button onClick={handleGenerateQuote} disabled={isLoading} variant="contained" color="primary">
        Generate Quote
      </Button>
      {quoteHtml && (
        <>
          <Typography variant="h6" sx={{ mt: 2 }}>Quote Preview:</Typography>
          <Box sx={{ mt: 1, p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1, maxHeight: '400px', overflowY: 'auto' }}>
            <div dangerouslySetInnerHTML={{ __html: quoteHtml }} />
          </Box>
          <Button onClick={handleSendQuote} disabled={isLoading} variant="contained" color="secondary" sx={{ mt: 2, mr: 2 }}>
            Send Quote
          </Button>
        </>
      )}
      {isLoading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {successMessage && <Typography color="success">{successMessage}</Typography>}
    </Box>
  );
};

export default QuoteManager;