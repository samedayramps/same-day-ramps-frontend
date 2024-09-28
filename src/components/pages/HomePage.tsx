// src/components/pages/HomePage.tsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchRentalRequests } from '../../stores/rentalRequestsSlice';
import { formatDate } from '../../utils/formatDate';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rentalRequests, loading, error } = useAppSelector((state) => state.rentalRequests);

  useEffect(() => {
    dispatch(fetchRentalRequests());
  }, [dispatch]);

  // Filter pending rental requests
  const pendingRequests = rentalRequests.filter((request) => request.status === 'pending');

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Same Day Ramps - Dashboard
      </Typography>
      <Button
        component={Link}
        to="/rental-requests"
        variant="contained"
        color="primary"
        style={{ marginRight: '1rem' }}
      >
        View All Rental Requests
      </Button>
      <Button
        component={Link}
        to="/jobs"
        variant="contained"
        color="primary"
        style={{ marginRight: '1rem' }}
      >
        View Jobs
      </Button>
      <Button component={Link} to="/settings" variant="contained" color="primary">
        Settings
      </Button>

      <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
        Pending Rental Requests
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      ) : pendingRequests.length === 0 ? (
        <Typography>No pending rental requests.</Typography>
      ) : (
        <Grid container spacing={2}>
          {pendingRequests.map((request) => (
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
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    component={Link}
                    to={`/rental-request/${request._id}`}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default HomePage;