// src/components/pages/JobDetails.tsx

import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchJob, updateJobStage, deleteJob, updateJob } from '../../stores/jobsSlice';
import { JobStage, Job, QuoteStatus, AgreementStatus } from '../../types/Job';
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from '@mui/material';
import PaymentInitiation from '../stripe/PaymentInitiation';
import DocumentSigning from '../eSignatures/DocumentSigning';

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentJob, isLoading, error } = useAppSelector((state) => state.jobs);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'error' | 'warning' | 'info' | 'success'>('error');

  // State for Editable Fields
  const [stage, setStage] = useState<JobStage | ''>('');
  const [quotePaidOn, setQuotePaidOn] = useState<string>('');
  const [agreementSignedOn, setAgreementSignedOn] = useState<string>('');
  const [quoteStatus, setQuoteStatus] = useState<QuoteStatus>(QuoteStatus.NOT_SENT);
  const [agreementStatus, setAgreementStatus] = useState<AgreementStatus>(AgreementStatus.NOT_SENT);

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
      setStage(currentJob.stage);
      setQuotePaidOn(currentJob.quotePaidOn || '');
      setAgreementSignedOn(currentJob.agreementSignedOn || '');
      setQuoteStatus(currentJob.quoteStatus || QuoteStatus.NOT_SENT);
      setAgreementStatus(currentJob.agreementStatus || AgreementStatus.NOT_SENT);
    }
  }, [currentJob]);

  const handleSendQuote = async () => {
    if (currentJob && currentJob._id) {
      try {
        await dispatch(updateJobStage({ id: currentJob._id, stage: JobStage.QUOTE_SENT })).unwrap();
        setSnackbarMessage('Quote sent successfully');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } catch (error) {
        setSnackbarMessage('Failed to send quote');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } else {
      setSnackbarMessage('Cannot send quote: Job ID is missing');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

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

  // Handle Save Changes for Stage, Dates, and Statuses
  const handleSaveChanges = async () => {
    if (!currentJob) return;

    const updatedData: Partial<Job> = {
      stage: stage || currentJob.stage,
      quotePaidOn: quotePaidOn || undefined,
      agreementSignedOn: agreementSignedOn || undefined,
      quoteStatus,
      agreementStatus,
    };

    try {
      await dispatch(updateJob({ _id: currentJob._id, ...updatedData })).unwrap();
      setSnackbarMessage('Job details updated successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (err: any) {
      setSnackbarMessage('Failed to update job details');
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

        <Grid container spacing={3}>
          {/* Customer Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Customer Information</Typography>
            <Typography>Name: {currentJob.customerInfo?.firstName} {currentJob.customerInfo?.lastName}</Typography>
            <Typography>Phone: {currentJob.customerInfo?.phone}</Typography>
            <Typography>Email: {currentJob.customerInfo?.email}</Typography>
            <Typography>Install Address: {currentJob.customerInfo?.installAddress}</Typography>
            <Typography>Mobility Aids: {currentJob.customerInfo?.mobilityAids?.join(', ') || 'None specified'}</Typography>
            <Typography>Notes: {currentJob.customerInfo?.notes || 'None'}</Typography>
          </Grid>

          {/* Ramp Configuration */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Ramp Configuration</Typography>
            {currentJob.rampConfiguration?.components && renderRampComponents(currentJob.rampConfiguration.components)}
            <Typography>Total Length: {currentJob.rampConfiguration?.totalLength} ft</Typography>
          </Grid>

          {/* Pricing Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Pricing Details</Typography>
            <Typography>Delivery Fee: {formatCurrency(currentJob.pricing?.deliveryFee)}</Typography>
            <Typography>Install Fee: {formatCurrency(currentJob.pricing?.installFee)}</Typography>
            <Typography>Monthly Rate: {formatCurrency(currentJob.pricing?.monthlyRate)}</Typography>
            <Typography>Upfront Fee: {formatCurrency(currentJob.pricing?.upfrontFee)}</Typography>
          </Grid>

          {/* Installation Schedule */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Installation Schedule</Typography>
            <Typography>Date & Time: {formatDate(currentJob.installationSchedule?.date || null)}</Typography>
          </Grid>

          {/* Job Details and Editable Fields */}
          <Grid item xs={12}>
            <Typography variant="h6">Job Information</Typography>
            <Grid container spacing={2}>
              {/* Job ID and Stage Selector */}
              <Grid item xs={12} md={4}>
                <Typography>Job ID: {currentJob._id}</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth variant="outlined" size="small">
                  <InputLabel>Stage</InputLabel>
                  <Select
                    label="Stage"
                    value={stage}
                    onChange={(e) => setStage(e.target.value as JobStage)}
                  >
                    {Object.values(JobStage).map((stageOption) => (
                      <MenuItem key={stageOption} value={stageOption}>
                        {stageOption.replace(/([A-Z])/g, ' $1').trim()}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* Quote and Agreement Status */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined" size="small">
                  <InputLabel>Quote Status</InputLabel>
                  <Select
                    value={quoteStatus}
                    onChange={(e) => setQuoteStatus(e.target.value as QuoteStatus)}
                    label="Quote Status"
                  >
                    {Object.values(QuoteStatus).map((status) => (
                      <MenuItem key={status} value={status}>
                        {status.replace(/_/g, ' ')}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined" size="small">
                  <InputLabel>Agreement Status</InputLabel>
                  <Select
                    value={agreementStatus}
                    onChange={(e) => setAgreementStatus(e.target.value as AgreementStatus)}
                    label="Agreement Status"
                  >
                    {Object.values(AgreementStatus).map((status) => (
                      <MenuItem key={status} value={status}>
                        {status.replace(/_/g, ' ')}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* Quote Paid On and Agreement Signed On */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Quote Paid On"
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={quotePaidOn}
                  onChange={(e) => setQuotePaidOn(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Agreement Signed On"
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={agreementSignedOn}
                  onChange={(e) => setAgreementSignedOn(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* New fields for Stripe and eSignatures */}
          <Grid item xs={12}>
            <Typography variant="h6">Payment and Document Information</Typography>
            <Typography>Stripe Customer ID: {currentJob.stripeCustomerId || 'Not set'}</Typography>
            <Typography>Stripe Invoice ID: {currentJob.stripeInvoiceId || 'Not set'}</Typography>
            <Typography>eSignatures Document ID: {currentJob.eSignaturesDocumentId || 'Not set'}</Typography>
          </Grid>

          {/* Buttons for initiating payment and document signing */}
          <Grid item xs={12}>
            <PaymentInitiation jobId={currentJob._id!} />
            <DocumentSigning jobId={currentJob._id!} />
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Button variant="contained" color="primary" onClick={handleSendQuote} sx={{ mr: 2 }}>
              Send Quote
            </Button>
            <Button variant="contained" color="secondary" onClick={handleEditJob} sx={{ mr: 2 }}>
              Edit Job
            </Button>
            <Button variant="contained" color="error" onClick={handleOpenDeleteDialog}>
              Delete Job
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" color="success" onClick={handleSaveChanges} disabled={!id}>
              Save Changes
            </Button>
          </Box>
        </Box>
      </Paper>

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
    </Container>
  );
};

export default JobDetails;