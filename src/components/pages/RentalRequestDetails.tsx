// src/components/pages/RentalRequestDetails.tsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { rentalRequestsApi } from '../../services/api';
import { RentalRequest } from '../../types/RentalRequest';
import {
  Container,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Chip,
  Box,
} from '@mui/material';
import { formatDate } from '../../utils/formatDate';

const RentalRequestDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [rentalRequest, setRentalRequest] = useState<RentalRequest | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRentalRequest = async () => {
      try {
        const response = await rentalRequestsApi.getById(id!);
        setRentalRequest(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to load rental request');
      } finally {
        setIsLoading(false);
      }
    };
    fetchRentalRequest();
  }, [id]);

  const handleCreateJob = async () => {
    if (!rentalRequest) return;

    try {
      await rentalRequestsApi.updateStatus(rentalRequest._id, 'job created');
      const response = await rentalRequestsApi.createJobFromRentalRequest(rentalRequest._id);
      navigate(`/jobs/${response.data._id}`);
    } catch (err: any) {
      console.error('Failed to create job from rental request', err);
      setError(err.response?.data?.message || 'Failed to create job');
    }
  };

  const handleRejectRequest = async () => {
    if (!rentalRequest) return;

    try {
      await rentalRequestsApi.updateStatus(rentalRequest._id, 'rejected');
      // Refresh the rental request data
      const response = await rentalRequestsApi.getById(rentalRequest._id);
      setRentalRequest(response.data);
    } catch (err: any) {
      console.error('Failed to reject rental request', err);
      setError(err.response?.data?.message || 'Failed to reject request');
    }
  };

  if (isLoading) {
    return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error || !rentalRequest) {
    return (
      <Container style={{ marginTop: '16px' }}>
        <Typography variant="h6" color="error">
          {error || 'Rental request not found'}
        </Typography>
      </Container>
    );
  }

  return (
    <Container style={{ paddingBottom: '16px' }}>
      <Typography variant="h5" gutterBottom>
        Rental Request Details
      </Typography>

      <List disablePadding>
        {/* Customer Information */}
        <ListItem>
          <ListItemText
            primary="Customer Name"
            secondary={`${rentalRequest.customerInfo.firstName} ${rentalRequest.customerInfo.lastName}`}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Email" secondary={rentalRequest.customerInfo.email} />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Phone" secondary={rentalRequest.customerInfo.phone} />
        </ListItem>
        <Divider component="li" />

        {/* Installation Details */}
        <ListItem>
          <ListItemText primary="Install Address" secondary={rentalRequest.installAddress} />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Install Timeframe" secondary={rentalRequest.rampDetails.installTimeframe} />
        </ListItem>
        <Divider component="li" />

        {/* Ramp Details */}
        <ListItem>
          <ListItemText
            primary="Knows Ramp Length"
            secondary={rentalRequest.rampDetails.knowRampLength ? 'Yes' : 'No'}
          />
        </ListItem>
        <Divider component="li" />
        {rentalRequest.rampDetails.rampLength && (
          <>
            <ListItem>
              <ListItemText
                primary="Ramp Length"
                secondary={`${rentalRequest.rampDetails.rampLength} feet`}
              />
            </ListItem>
            <Divider component="li" />
          </>
        )}
        <ListItem>
          <ListItemText
            primary="Knows Rental Duration"
            secondary={rentalRequest.rampDetails.knowRentalDuration ? 'Yes' : 'No'}
          />
        </ListItem>
        <Divider component="li" />
        {rentalRequest.rampDetails.rentalDuration && (
          <>
            <ListItem>
              <ListItemText
                primary="Rental Duration"
                secondary={`${rentalRequest.rampDetails.rentalDuration} days`}
              />
            </ListItem>
            <Divider component="li" />
          </>
        )}

        {/* Mobility Aids */}
        <ListItem>
          <ListItemText primary="Mobility Aids" />
        </ListItem>
        <ListItem>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {rentalRequest.rampDetails.mobilityAids.map((aid, index) => (
              <Chip key={index} label={aid} />
            ))}
          </Box>
        </ListItem>
        <Divider component="li" />

        {/* Status and Sales Stage */}
        <ListItem>
          <ListItemText primary="Request Status" />
          <Chip
            label={rentalRequest.status.toUpperCase()}
            color={
              rentalRequest.status === 'pending'
                ? 'warning'
                : rentalRequest.status === 'job created'
                ? 'success'
                : 'error'
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Sales Stage" />
          <Chip label={rentalRequest.salesStage} />
        </ListItem>
        <Divider component="li" />

        {/* Dates */}
        <ListItem>
          <ListItemText primary="Created At" secondary={formatDate(rentalRequest.createdAt)} />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Last Updated" secondary={formatDate(rentalRequest.updatedAt)} />
        </ListItem>
      </List>

      <Box mt={2} display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          color="primary"
          style={{ flex: 1, marginRight: '8px' }}
          onClick={handleCreateJob}
          disabled={rentalRequest.status !== 'pending'}
        >
          {rentalRequest.status === 'job created' ? 'Job Already Created' : 'Create Job'}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ flex: 1, marginLeft: '8px' }}
          onClick={handleRejectRequest}
          disabled={rentalRequest.status !== 'pending'}
        >
          Reject Request
        </Button>
      </Box>
    </Container>
  );
};

export default RentalRequestDetails;