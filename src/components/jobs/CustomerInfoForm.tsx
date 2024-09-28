// src/components/jobs/CustomerInfoForm.tsx

import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography } from '@mui/material';
import { CustomerInfo } from '../../types/Job';
import GoogleAddressAutofill from '../common/GoogleAddressAutofill';

interface Props {
  onSubmit: (values: CustomerInfo) => void;
  data?: CustomerInfo;
}

const CustomerInfoSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  installAddress: Yup.string().required('Required'),
  // Add validation for mobilityAids and notes if necessary
});

const CustomerInfoForm: React.FC<Props> = ({ onSubmit, data }) => {
  const initialValues: CustomerInfo = {
    firstName: data?.firstName || '',
    lastName: data?.lastName || '',
    phone: data?.phone || '',
    email: data?.email || '',
    installAddress: data?.installAddress || '',
    mobilityAids: data?.mobilityAids || [],
    notes: data?.notes || '',
  };

  const handleSubmit = (values: CustomerInfo, actions: FormikHelpers<CustomerInfo>) => {
    console.log('Submitting customer info:', values);
    onSubmit(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={CustomerInfoSchema} onSubmit={handleSubmit}>
      {({ isSubmitting, setFieldValue, values }) => (
        <Form>
          <Typography variant="h6">Customer Information</Typography>
          <Field name="firstName" as={TextField} label="First Name" fullWidth margin="normal" />
          <ErrorMessage name="firstName">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          <Field name="lastName" as={TextField} label="Last Name" fullWidth margin="normal" />
          <ErrorMessage name="lastName">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          <Field name="phone" as={TextField} label="Phone" fullWidth margin="normal" />
          <ErrorMessage name="phone">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          <Field name="email" as={TextField} label="Email" fullWidth margin="normal" />
          <ErrorMessage name="email">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          <GoogleAddressAutofill
            value={values.installAddress || ''}
            onChange={(value) => setFieldValue('installAddress', value)}
            label="Install Address"
            fullWidth
            margin="normal"
          />
          <ErrorMessage name="installAddress">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          {/* Mobility Aids and Notes can be added here */}

          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomerInfoForm;