// src/components/pages/JobDetails.tsx

import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchJob, deleteJob, createStripePaymentLink, createAgreementLink } from '../../stores/jobsSlice';
// Removed unused imports: _updateJobStage, _JobStage
import {
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentJob, isLoading, error } = useAppSelector((state) => state.jobs);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'error' | 'warning' | 'info' | 'success'>('error');

  // Fetch Job Details
  const fetchJobDetails = useCallback(async () => {
    if (id) {
      await dispatch(fetchJob(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    fetchJobDetails();
  }, [fetchJobDetails]);

  // Update Local State when Job Data is Fetched
  useEffect(() => {
    if (currentJob) {
      // Remove these setters
      // setStage(currentJob.stage);
      // setQuotePaidOn(currentJob.quotePaidOn || '');
      // setAgreementSignedOn(currentJob.agreementSignedOn || '');
      // setQuoteStatus(currentJob.quoteStatus || QuoteStatus.NOT_SENT);
      // setAgreementStatus(currentJob.agreementStatus || AgreementStatus.NOT_SENT);
    }
  }, [currentJob]);

  const handleEditJob = () => {
    if (currentJob && currentJob._id) {
      navigate(`/jobs/edit/${currentJob._id}`);
    } else {
      setSnackbarMessage('Cannot edit job: Job ID is missing');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleDeleteJob = async () => {
    if (currentJob && currentJob._id) {
      try {
        await dispatch(deleteJob(currentJob._id)).unwrap();
        navigate('/jobs');
      } catch (error) {
        setSnackbarMessage('Failed to delete job');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } else {
      setSnackbarMessage('Cannot delete job: Job ID is missing');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
    setDeleteDialogOpen(false);
  };

  const handleOpenDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleCreatePaymentLink = async () => {
    if (currentJob && currentJob._id) {
      try {
        await dispatch(createStripePaymentLink(currentJob._id)).unwrap();
        setSnackbarMessage('Payment link created successfully');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } catch (error) {
        setSnackbarMessage('Failed to create payment link');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } else {
      setSnackbarMessage('Cannot create payment link: Job ID is missing');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleRegeneratePaymentLink = async () => {
    if (currentJob && currentJob._id) {
      try {
        await dispatch(createStripePaymentLink(currentJob._id)).unwrap();
        setSnackbarMessage('Payment link regenerated successfully');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } catch (error) {
        setSnackbarMessage('Failed to regenerate payment link');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } else {
      setSnackbarMessage('Cannot regenerate payment link: Job ID is missing');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  // New Handlers for Agreement Link
  const handleCreateAgreementLink = async () => {
    if (currentJob && currentJob._id) {
      try {
        await dispatch(createAgreementLink(currentJob._id)).unwrap();
        setSnackbarMessage('Agreement link created successfully');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } catch (error) {
        setSnackbarMessage('Failed to create agreement link');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } else {
      setSnackbarMessage('Cannot create agreement link: Job ID is missing');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleRegenerateAgreementLink = async () => {
    if (currentJob && currentJob._id) {
      try {
        await dispatch(createAgreementLink(currentJob._id)).unwrap();
        setSnackbarMessage('Agreement link regenerated successfully');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } catch (error) {
        setSnackbarMessage('Failed to regenerate agreement link');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } else {
      setSnackbarMessage('Cannot regenerate agreement link: Job ID is missing');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  if (isLoading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error || !currentJob) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error || 'Job not found'}
        </Typography>
      </Container>
    );
  }

  const formatCurrency = (value: number | undefined) => 
    value !== undefined ? `$${value.toFixed(2)}` : 'N/A';

  const renderRampComponents = (components: Array<{type: string, size: string, quantity: number}>) => {
    return components.map((component, index) => (
      <Typography key={index}>
        {component.quantity} x {component.type} ({component.size})
      </Typography>
    ));
  };

  const formatDate = (date: string | null) => {
    if (!date) return 'Not set';
    return new Date(date).toLocaleString();
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Job Details
        </Typography>

        <Grid container spacing={4}>
          {/* Customer Information */}
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" gutterBottom>
              Customer Information
            </Typography>
            <Typography>Name: {currentJob.customerInfo?.firstName} {currentJob.customerInfo?.lastName}</Typography>
            <Typography>Phone: {currentJob.customerInfo?.phone}</Typography>
            <Typography>Email: {currentJob.customerInfo?.email}</Typography>
            <Typography>Install Address: {currentJob.customerInfo?.installAddress}</Typography>
            <Typography>Mobility Aids: {currentJob.customerInfo?.mobilityAids?.join(', ') || 'None specified'}</Typography>
            <Typography>Notes: {currentJob.customerInfo?.notes || 'None'}</Typography>
          </Grid>

          {/* Ramp Configuration */}
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" gutterBottom>
              Ramp Configuration
            </Typography>
            {currentJob.rampConfiguration?.components && renderRampComponents(currentJob.rampConfiguration.components)}
            <Typography>Total Length: {currentJob.rampConfiguration?.totalLength} ft</Typography>
          </Grid>

          {/* Pricing Details */}
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" gutterBottom>
              Pricing Details
            </Typography>
            <Typography>Delivery Fee: {formatCurrency(currentJob.pricing?.deliveryFee)}</Typography>
            <Typography>Install Fee: {formatCurrency(currentJob.pricing?.installFee)}</Typography>
            <Typography>Monthly Rate: {formatCurrency(currentJob.pricing?.monthlyRate)}</Typography>
            <Typography>Upfront Fee: {formatCurrency(currentJob.pricing?.upfrontFee)}</Typography>
          </Grid>

          {/* Installation Schedule */}
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" gutterBottom>
              Installation Schedule
            </Typography>
            <Typography>Date & Time: {formatDate(currentJob.installationSchedule?.date || null)}</Typography>
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button variant="contained" color="secondary" onClick={handleEditJob}>
                Edit Job
              </Button>
              <Button variant="contained" color="error" onClick={handleOpenDeleteDialog}>
                Delete Job
              </Button>
            </Box>
          </Grid>

          {/* Payment Link */}
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" gutterBottom>
              Payment
            </Typography>
            {currentJob?.paymentLinkUrl ? (
              <>
                <Typography>Payment Link: {currentJob.paymentLinkUrl}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => window.open(currentJob.paymentLinkUrl, '_blank')}
                  sx={{ mr: 2, mt: 1 }}
                >
                  Open Payment Link
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleRegeneratePaymentLink}
                  sx={{ mt: 1 }}
                >
                  Regenerate Payment Link
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleCreatePaymentLink}
              >
                Generate Payment Link
              </Button>
            )}
          </Grid>

          {/* Agreement Link */}
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" gutterBottom>
              Agreement
            </Typography>
            {currentJob?.agreementLinkUrl ? (
              <>
                <Typography>Agreement Link: {currentJob.agreementLinkUrl}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => window.open(currentJob.agreementLinkUrl, '_blank')}
                  sx={{ mr: 2, mt: 1 }}
                >
                  Open Agreement Link
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleRegenerateAgreementLink}
                  sx={{ mt: 1 }}
                >
                  Regenerate Agreement Link
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCreateAgreementLink}
              >
                Generate Agreement Link
              </Button>
            )}
          </Grid>
        </Grid>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deleteDialogOpen}
          onClose={handleCloseDeleteDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Job"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this job? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDeleteJob} color="error" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar for Notifications */}
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Paper>
    </Container>
  );
};

export default JobDetails;