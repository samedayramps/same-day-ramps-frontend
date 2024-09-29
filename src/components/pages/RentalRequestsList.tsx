// src/components/pages/RentalRequestsList.tsx

import React, { useEffect, useState } from 'react';
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';
import { formatDate } from '../../utils/formatDate';
import { RentalRequest } from '../../types/RentalRequest';

type SortField = 'createdAt' | 'customerName' | 'status';
type SortOrder = 'asc' | 'desc';

const RentalRequestsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rentalRequests, loading, error } = useAppSelector((state) => state.rentalRequests);

  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [statusFilter, setStatusFilter] = useState<string>('pending');

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

  const sortRequests = (requests: RentalRequest[]): RentalRequest[] => {
    return [...requests].sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'createdAt':
          comparison = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          break;
        case 'customerName':
          comparison = `${a.customerInfo.lastName} ${a.customerInfo.firstName}`.localeCompare(
            `${b.customerInfo.lastName} ${b.customerInfo.firstName}`
          );
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  };

  const filterRequests = (requests: RentalRequest[]): RentalRequest[] => {
    if (statusFilter === 'all') return [...requests];
    return requests.filter((request) => request.status === statusFilter);
  };

  const sortedAndFilteredRequests = sortRequests(filterRequests(rentalRequests));

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Rental Requests
      </Typography>
      <Box mb={2}>
        <FormControl variant="outlined" size="small" style={{ minWidth: 120, marginRight: 16 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortField}
            onChange={(e) => setSortField(e.target.value as SortField)}
            label="Sort By"
          >
            <MenuItem value="createdAt">Date</MenuItem>
            <MenuItem value="customerName">Customer Name</MenuItem>
            <MenuItem value="status">Status</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small" style={{ minWidth: 120, marginRight: 16 }}>
          <InputLabel>Order</InputLabel>
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            label="Order"
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small" style={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            label="Status"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="job created">Job Created</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2}>
        {sortedAndFilteredRequests.map((request) => (
          <Grid item xs={12} sm={6} md={4} key={request._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {request.customerInfo.lastName}, {request.customerInfo.firstName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {request.installAddress}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Received At: {formatDate(request.createdAt)}
                </Typography>
                <Chip
                  label={request.status}
                  color={
                    request.status === 'pending'
                      ? 'warning'
                      : request.status === 'job created'
                      ? 'success'
                      : 'error'
                  }
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