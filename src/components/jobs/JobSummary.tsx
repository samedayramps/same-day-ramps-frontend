// src/components/jobs/JobSummary.tsx

import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/store';

interface Props {
  onBack: () => void;
  onSubmit: () => void;
}

const JobSummary: React.FC<Props> = ({ onBack, onSubmit }) => {
  const currentJob = useSelector((state: RootState) => {
    const job = state.jobs.currentJob;
    console.log('Reading currentJob from store:', job);
    return job;
  });

  if (!currentJob) {
    return <Typography>No job data available</Typography>;
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Job Summary</Typography>
      
      <Box mb={3}>
        <Typography variant="subtitle1">Customer Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Name: {currentJob.customerInfo?.firstName} {currentJob.customerInfo?.lastName}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Phone: {currentJob.customerInfo?.phone}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Email: {currentJob.customerInfo?.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Address: {currentJob.customerInfo?.installAddress}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Mobility Aids: {currentJob.customerInfo?.mobilityAids?.join(', ') || 'None'}</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1">Ramp Configuration</Typography>
        <Grid container spacing={2}>
          {currentJob.rampConfiguration?.components.map((component, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant="body2">
                {component.quantity} x {component.type} ({component.size})
              </Typography>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="body2">Total Length: {currentJob.rampConfiguration?.totalLength} ft</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1">Pricing</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Delivery Fee: ${currentJob.pricing?.deliveryFee}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Install Fee: ${currentJob.pricing?.installFee}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Rental Rate: ${currentJob.pricing?.monthlyRate}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Upfront Fee: ${currentJob.pricing?.upfrontFee}</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Submit Job
        </Button>
      </Box>
    </Box>
  );
};

export default JobSummary;