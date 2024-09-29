import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { jobsApi } from '../../services/api';

interface Props {
  jobId: string;
}

const PaymentInitiation: React.FC<Props> = ({ jobId }) => {
  const [loading, setLoading] = useState(false);

  const handleInitiatePayment = async () => {
    setLoading(true);
    try {
      const response = await jobsApi.initiateStripePayment(jobId);
      // Here you would typically use the Stripe.js library to handle the payment
      // using the clientSecret returned from the backend
      console.log('Payment initiated:', response.data.clientSecret);
      // Redirect to Stripe Checkout or handle the payment flow
    } catch (error) {
      console.error('Failed to initiate payment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleInitiatePayment}
      disabled={loading}
    >
      {loading ? <CircularProgress size={24} /> : 'Initiate Payment'}
    </Button>
  );
};

export default PaymentInitiation;