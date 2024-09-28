import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchJob, updateJobStage, deleteJob } from '../../stores/jobsSlice';
import { JobStage } from '../../types/Job';
import { 
  Container, Typography, Button, Paper, Grid, Box, Dialog, DialogActions, 
  DialogContent, DialogContentText, DialogTitle, CircularProgress, Snackbar 
} from '@mui/material';
import { Alert } from '@mui/material';

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentJob, isLoading, error } = useAppSelector((state) => state.jobs);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'error' | 'warning' | 'info' | 'success'>('error');

  useEffect(() => {
    if (id) {
      dispatch(fetchJob(id));
    }
  }, [dispatch, id]);

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

  if (isLoading) {
    return (
      <Container>
        <CircularProgress />
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
      <Paper elevation={3} className="p-5 mt-5">
        <Typography variant="h4" gutterBottom>Job Details</Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Customer Information</Typography>
            <Typography>Name: {currentJob.customerInfo?.firstName} {currentJob.customerInfo?.lastName}</Typography>
            <Typography>Phone: {currentJob.customerInfo?.phone}</Typography>
            <Typography>Email: {currentJob.customerInfo?.email}</Typography>
            <Typography>Install Address: {currentJob.customerInfo?.installAddress}</Typography>
            <Typography>Mobility Aids: {currentJob.customerInfo?.mobilityAids?.join(', ') || 'None specified'}</Typography>
            <Typography>Notes: {currentJob.customerInfo?.notes || 'None'}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">Ramp Configuration</Typography>
            {currentJob.rampConfiguration?.components && renderRampComponents(currentJob.rampConfiguration.components)}
            <Typography>Total Length: {currentJob.rampConfiguration?.totalLength} ft</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">Pricing Details</Typography>
            <Typography>Delivery Fee: {formatCurrency(currentJob.pricing?.deliveryFee)}</Typography>
            <Typography>Install Fee: {formatCurrency(currentJob.pricing?.installFee)}</Typography>
            <Typography>Monthly Rate: {formatCurrency(currentJob.pricing?.monthlyRate)}</Typography>
            <Typography>Upfront Fee: {formatCurrency(currentJob.pricing?.upfrontFee)}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">Installation Schedule</Typography>
            <Typography>Date & Time: {formatDate(currentJob.installationSchedule?.date?.toString() || null)}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Job Details</Typography>
            <Typography>Job ID: {currentJob._id}</Typography>
            <Typography>Stage: {currentJob.stage}</Typography>
            <Typography>Created At: {formatDate(currentJob.createdAt || null)}</Typography>
            <Typography>Updated At: {formatDate(currentJob.updatedAt || null)}</Typography>
          </Grid>
        </Grid>

        <Box mt={3} display="flex" justifyContent="space-between">
          <Button variant="contained" color="primary" onClick={handleSendQuote}>
            Send Quote
          </Button>
          <Button variant="contained" color="secondary" onClick={handleEditJob}>
            Edit Job
          </Button>
          <Button variant="contained" color="error" onClick={handleOpenDeleteDialog}>
            Delete Job
          </Button>
        </Box>
      </Paper>

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

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default JobDetails;