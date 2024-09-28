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
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const JobsList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<JobStage | 'ALL'>('ALL');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
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

  const filteredAndSortedJobs = jobs
    .filter(job => filter === 'ALL' || job.stage === filter)
    .sort((a, b) => {
      const dateA = new Date(a.createdAt || '').getTime();
      const dateB = new Date(b.createdAt || '').getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

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
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Filter by Stage</InputLabel>
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value as JobStage | 'ALL')}
            >
              <MenuItem value="ALL">All Stages</MenuItem>
              {Object.values(JobStage).map((stage) => (
                <MenuItem key={stage} value={stage}>
                  {stage}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Sort by Date</InputLabel>
            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            >
              <MenuItem value="asc">Oldest First</MenuItem>
              <MenuItem value="desc">Newest First</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {filteredAndSortedJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {job.customerInfo?.firstName} {job.customerInfo?.lastName}
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