// src/components/pages/SettingsPage.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPricingVariables, updatePricingVariables } from '../../stores/pricingVariablesSlice';
import { PricingVariables } from '../../types/PricingVariables';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Typography, Button, TextField, Box } from '@mui/material';
import * as Yup from 'yup';

const PricingVariablesSchema = Yup.object().shape({
  warehouseAddress: Yup.string().required('Warehouse address is required'),
  baseDeliveryFee: Yup.number().required('Base delivery fee is required'),
  deliveryFeePerMile: Yup.number().required('Delivery fee per mile is required'),
  baseInstallFee: Yup.number().required('Base install fee is required'),
  installFeePerComponent: Yup.number().required('Install fee per component is required'),
  rentalRatePerFt: Yup.number().required('Rental rate per ft is required'),
});

const SettingsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { variables, loading } = useAppSelector((state) => state.pricingVariables);

  useEffect(() => {
    dispatch(fetchPricingVariables());
  }, [dispatch]);

  if (loading || !variables) {
    return (
      <Container className="flex justify-center items-center h-screen">
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  const handleSubmit = (values: PricingVariables) => {
    dispatch(updatePricingVariables(values));
  };

  return (
    <Container className="mt-8">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Formik
        initialValues={variables}
        validationSchema={PricingVariablesSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mb={2}>
              <Field
                name="warehouseAddress"
                as={TextField}
                label="Warehouse Address"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="warehouseAddress">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="baseDeliveryFee"
                as={TextField}
                label="Base Delivery Fee"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="baseDeliveryFee">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="deliveryFeePerMile"
                as={TextField}
                label="Delivery Fee Per Mile"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="deliveryFeePerMile">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="baseInstallFee"
                as={TextField}
                label="Base Install Fee"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="baseInstallFee">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="installFeePerComponent"
                as={TextField}
                label="Install Fee Per Component"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="installFeePerComponent">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="rentalRatePerFt"
                as={TextField}
                label="Rental Rate Per Ft"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="rentalRatePerFt">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Save Settings
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SettingsPage;