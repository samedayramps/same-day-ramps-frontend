// src/components/forms/RentalRequestForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { rentalRequestsApi } from '../../services/api';
import { RentalRequest } from '../../types/RentalRequest';
import { Container, Button, Typography, TextField } from '@mui/material';

const RentalRequestSchema = Yup.object().shape({
  customerInfo: Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
  }),
  rampDetails: Yup.object().shape({
    knowRampLength: Yup.boolean().required(),
    rampLength: Yup.number().when('knowRampLength', {
      is: true,
      then: (schema) => schema.required('Ramp length is required'),
      otherwise: (schema) => schema.notRequired(),
    }),
    knowRentalDuration: Yup.boolean().required(),
    rentalDuration: Yup.number().when('knowRentalDuration', {
      is: true,
      then: (schema) => schema.required('Rental duration is required'),
      otherwise: (schema) => schema.notRequired(),
    }),
    installTimeframe: Yup.string().required('Install timeframe is required'),
    mobilityAids: Yup.array().of(Yup.string()),
  }),
  installAddress: Yup.string().required('Installation address is required'),
});

const RentalRequestForm: React.FC = () => {
  const initialValues: Omit<RentalRequest, '_id' | 'status' | 'salesStage' | 'createdAt' | 'updatedAt'> = {
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    rampDetails: {
      knowRampLength: false,
      rampLength: undefined,
      knowRentalDuration: false,
      rentalDuration: undefined,
      installTimeframe: '',
      mobilityAids: [],
    },
    installAddress: '',
  };

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting, resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    try {
      await rentalRequestsApi.create(values);
      resetForm();
      // Notify success
    } catch (error) {
      // Handle error
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Submit Rental Request</Typography>
      <Formik initialValues={initialValues} validationSchema={RentalRequestSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <h2>Customer Information</h2>
            <Field
              name="customerInfo.firstName"
              as={TextField}
              label="First Name"
              fullWidth
              margin="normal"
            />
            <ErrorMessage name="customerInfo.firstName">
              {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
            </ErrorMessage>

            {/* Repeat for other fields */}
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Submit Rental Request
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RentalRequestForm;