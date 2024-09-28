import React from 'react';
import { TextField, Grid, Box } from '@mui/material';
import { Pricing } from '../../types/Job';

interface Props {
  loading: boolean;
  error: string | null;
  pricing: Pricing | null;
  isEditingPricing: boolean;
  values: Pricing;
  setFieldValue: (field: string, value: any) => void;
}

const PricingEditor: React.FC<Props> = ({
  loading,
  error,
  pricing,
  isEditingPricing,
  values,
  setFieldValue,
}) => {
  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (!pricing) {
    return null;
  }

  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <TextField
            name="deliveryFee"
            label="Delivery Fee"
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{ readOnly: !isEditingPricing }}
            value={isEditingPricing ? values.deliveryFee : pricing.deliveryFee}
            onChange={(e) => {
              if (isEditingPricing) {
                setFieldValue('deliveryFee', parseInt(e.target.value));
              }
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            name="installFee"
            label="Install Fee"
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{ readOnly: !isEditingPricing }}
            value={isEditingPricing ? values.installFee : pricing.installFee}
            onChange={(e) => {
              if (isEditingPricing) {
                setFieldValue('installFee', parseInt(e.target.value));
              }
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            name="upfrontFee"
            label="Upfront Fee"
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{ readOnly: !isEditingPricing }}
            value={isEditingPricing ? values.upfrontFee : pricing.upfrontFee}
            onChange={(e) => {
              if (isEditingPricing) {
                setFieldValue('upfrontFee', parseInt(e.target.value));
              }
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            name="monthlyRate"
            label="Rental Rate"
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{ readOnly: !isEditingPricing }}
            value={isEditingPricing ? values.monthlyRate : pricing.monthlyRate}
            onChange={(e) => {
              if (isEditingPricing) {
                setFieldValue('monthlyRate', parseInt(e.target.value));
              }
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingEditor;