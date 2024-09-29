import React, { useEffect, useState } from 'react';
import { jobsApi } from '../../services/api';
import { Job, JobStage } from '../../types/Job';
import {
  Container,
  Typography,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

type SortField = 'createdAt' | 'customerName' | 'stage';
type SortOrder = 'asc' | 'desc';

const JobsList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [stageFilter, setStageFilter] = useState<JobStage | 'ALL'>('ALL');
  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc'); // Changed to 'asc'
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await jobsApi.getAll();
        setJobs(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to load jobs');
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const sortJobs = (jobsToSort: Job[]): Job[] => {
    return [...jobsToSort].sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'createdAt':
          comparison = new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
          break;
        case 'customerName':
          comparison = `${a.customerInfo?.lastName} ${a.customerInfo?.firstName}`.localeCompare(
            `${b.customerInfo?.lastName} ${b.customerInfo?.firstName}`
          );
          break;
        case 'stage':
          comparison = a.stage.localeCompare(b.stage);
          break;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  };

  const filterJobs = (jobsToFilter: Job[]): Job[] => {
    if (stageFilter === 'ALL') return jobsToFilter;
    return jobsToFilter.filter((job) => job.stage === stageFilter);
  };

  const sortedAndFilteredJobs = sortJobs(filterJobs(jobs));

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

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Jobs List
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
            <MenuItem value="stage">Stage</MenuItem>
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
          <InputLabel>Stage</InputLabel>
          <Select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value as JobStage | 'ALL')}
            label="Stage"
          >
            <MenuItem value="ALL">All Stages</MenuItem>
            {Object.values(JobStage).map((stage) => (
              <MenuItem key={stage} value={stage}>
                {stage}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3}>
        {sortedAndFilteredJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {job.customerInfo?.lastName}, {job.customerInfo?.firstName}
                </Typography>
                <Typography color="textSecondary">
                  Address: {job.customerInfo?.installAddress}
                </Typography>
                <Typography color="textSecondary">
                  Created: {job.createdAt ? new Date(job.createdAt).toLocaleString() : 'N/A'}
                </Typography>
                <Typography color="textSecondary">
                  Stage: {job.stage}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => navigate(`/jobs/${job._id}`)}>
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

export default JobsList;