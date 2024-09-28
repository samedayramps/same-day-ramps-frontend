import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createJob, updateJob, fetchJob } from '../../stores/jobsSlice';
import { Container, Paper, Box, Stepper, Step, StepLabel, Typography, CircularProgress, Snackbar } from '@mui/material';
import CustomerInfoForm from './CustomerInfoForm';
import RampConfigurationForm from './RampConfigurationForm';
import PricingForm from './PricingForm';
import JobSummary from './JobSummary';
import { Job, JobStage, CustomerInfo, RampConfiguration, Pricing } from '../../types/Job';

const steps = ['Customer Information', 'Ramp Configuration', 'Pricing', 'Summary'];

const JobCreationWizard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentJob, isLoading, error } = useAppSelector((state) => state.jobs);

  const [currentStep, setCurrentStep] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [tempJob, setTempJob] = useState<Partial<Job> | null>(null);

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      dispatch(fetchJob(id));
    } else {
      // Initialize a temporary job object instead of creating one in the database
      setTempJob({ stage: JobStage.REQUESTED });
    }
  }, [dispatch, id]);

  const handleStepCompletion = async (stepData: Partial<Job>) => {
    if (isEditMode && currentJob && currentJob._id) {
      try {
        await dispatch(updateJob({ _id: currentJob._id, ...stepData })).unwrap();
        setCurrentStep((prevStep) => prevStep + 1);
      } catch (error) {
        console.error('Failed to update job:', error);
        setErrorMessage('Failed to update job. Please try again.');
      }
    } else {
      // Update the temporary job object
      setTempJob((prev) => ({ ...prev, ...stepData }));
      if (currentStep === 0) {
        // Customer info form is completed, now create the job in the database
        try {
          const newJob = await dispatch(createJob(tempJob as Job)).unwrap();
          setIsEditMode(true);
          // Update the current job with the newly created job
          if (newJob._id) {
            dispatch(fetchJob(newJob._id));
          } else {
            throw new Error('New job created without an ID');
          }
        } catch (error) {
          console.error('Failed to create job:', error);
          setErrorMessage('Failed to create job. Please try again.');
        }
      }
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (currentJob) {
      navigate(`/jobs/${currentJob._id}`);
    }
  };

  if (isLoading) {
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

  const jobData = isEditMode ? currentJob : tempJob;

  if (!jobData) {
    return (
      <Container>
        <Typography variant="h6">Initializing job...</Typography>
      </Container>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <CustomerInfoForm
            onSubmit={(values: CustomerInfo) => handleStepCompletion({ customerInfo: values })}
            data={jobData.customerInfo}
          />
        );
      case 1:
        return (
          <RampConfigurationForm
            onSubmit={(values: RampConfiguration) => handleStepCompletion({ rampConfiguration: values })}
            onBack={handleBack}
            data={jobData.rampConfiguration}
            installAddress={jobData.customerInfo?.installAddress || ''}
          />
        );
      case 2:
        return (
          <PricingForm
            onSubmit={(values: Pricing) => handleStepCompletion({ pricing: values })}
            onBack={handleBack}
            data={jobData.rampConfiguration}
            installAddress={jobData.customerInfo?.installAddress || ''}
          />
        );
      case 3:
        return (
          <JobSummary
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={4}>
        <Paper elevation={3}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              {isEditMode ? 'Edit Job' : 'Create New Job'}
            </Typography>
            <Stepper activeStep={currentStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box mt={4}>
              {renderStep()}
            </Box>
          </Box>
        </Paper>
      </Box>
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={() => setErrorMessage(null)}
        message={errorMessage}
      />
    </Container>
  );
};

export default JobCreationWizard;