// src/components/pages/RentalRequestsList.tsx

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchRentalRequests } from '../../stores/rentalRequestsSlice';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
  Grid,
  Chip,
} from '@mui/material';
import { formatDate } from '../../utils/formatDate';

const RentalRequestsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rentalRequests, loading, error } = useAppSelector((state) => state.rentalRequests);

  useEffect(() => {
    dispatch(fetchRentalRequests());
  }, [dispatch]);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  // Sort rental requests by createdAt in descending order
  const sortedRequests = [...rentalRequests].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Rental Requests
      </Typography>
      <Grid container spacing={2}>
        {sortedRequests.map((request) => (
          <Grid item xs={12} sm={6} md={4} key={request._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {request.customerInfo.firstName} {request.customerInfo.lastName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {request.installAddress}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Received At: {formatDate(request.createdAt)}
                </Typography>
                <Chip
                  label={request.status}
                  color={request.status === 'pending' ? 'warning' : 'default'}
                  style={{ marginTop: '8px' }}
                />
              </CardContent>
              <CardActions>
              <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={`/rental-requests/${request._id}`}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RentalRequestsList;