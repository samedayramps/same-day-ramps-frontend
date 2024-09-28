// src/components/jobs/PricingForm.tsx

import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { RampConfiguration, Pricing } from '../../types/Job';
import usePricingCalculator from '../../hooks/usePricingCalculator';
import PricingEditor from './PricingEditor';
import { useAppSelector } from '../../hooks';

interface Props {
  onSubmit: (values: Pricing) => void;
  onBack: () => void;
  data?: RampConfiguration;
  installAddress: string;
}

const PricingForm: React.FC<Props> = ({
  onSubmit,
  onBack,
  data,
  installAddress,
}) => {
  const currentJob = useAppSelector((state) => state.jobs.currentJob);
  const { pricing, loading, error } = usePricingCalculator(currentJob?.rampConfiguration.components || [], installAddress);
  const [extendedData, setExtendedData] = useState<Pricing>({
    deliveryFee: 0,
    installFee: 0,
    monthlyRate: 0,
    upfrontFee: 0,
  });

  useEffect(() => {
    if (pricing) {
      setExtendedData(prevData => ({
        ...prevData,
        ...pricing,
      }));
    }
  }, [pricing]);

  const handleSubmit = () => {
    console.log('Submitting pricing data:', extendedData);
    onSubmit(extendedData);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Pricing Details</Typography>
      <PricingEditor
        loading={loading}
        error={error}
        pricing={pricing}
        isEditingPricing={false}
        values={extendedData}
        setFieldValue={(field, value) => {
          setExtendedData(prevData => ({
            ...prevData,
            [field]: value,
          }));
        }}
      />
      <Box mt={3} display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PricingForm;