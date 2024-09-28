// src/components/jobs/RampConfigurationForm.tsx

import React, { useMemo } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography, Box } from '@mui/material';
import { RampConfiguration, RampComponent } from '../../types/Job';
import ComponentSelector from './ComponentSelector';
import SelectedComponents from './SelectedComponents';

interface Props {
  onSubmit: (values: RampConfiguration) => void;
  onBack: () => void;
  data?: RampConfiguration;
  installAddress: string;
}

const RampConfigurationSchema = Yup.object().shape({
  components: Yup.array()
    .of(
      Yup.object().shape({
        type: Yup.string().oneOf(['ramp', 'landing']).required('Required'),
        size: Yup.string().required('Required'),
        quantity: Yup.number().required('Required').min(1),
      })
    )
    .min(1, 'At least one component is required'),
  totalLength: Yup.number()
    .required('Required')
    .min(1, 'Total length must be at least 1 foot'),
});

const RampConfigurationForm: React.FC<Props> = ({ onSubmit, onBack, data, installAddress }) => {
  const initialValues = useMemo(() => ({
    components: data?.components || [],
    totalLength: data?.totalLength || 0,
  }), [data]);

  const handleSubmit = (values: RampConfiguration) => {
    console.log('Submitting ramp configuration:', values);
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RampConfigurationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isValid, isSubmitting }) => (
        <Form>
          <Box sx={{ '& > *': { mb: 2 } }}>
            <Typography variant="h6">Ramp Configuration</Typography>

            <ComponentSelector
              addComponent={(type, size) => {
                const updatedComponents = addComponentHelper(values.components, type, size);
                setFieldValue('components', updatedComponents);
                setFieldValue('totalLength', calculateTotalLength(updatedComponents));
              }}
            />

            <SelectedComponents
              components={values.components}
              onRemove={(index) => {
                const newComponents = [...values.components];
                newComponents.splice(index, 1);
                setFieldValue('components', newComponents);
                setFieldValue('totalLength', calculateTotalLength(newComponents));
                console.log('Updated components after removal:', newComponents);
              }}
              onQuantityChange={(index, quantity) => {
                const newComponents = [...values.components];
                newComponents[index].quantity = quantity;
                setFieldValue('components', newComponents);
                setFieldValue('totalLength', calculateTotalLength(newComponents));
                console.log('Updated components after quantity change:', newComponents);
              }}
            />

            <Field
              name="totalLength"
              as={TextField}
              label="Total Ramp Length (ft)"
              type="number"
              fullWidth
              variant="outlined"
              InputProps={{ inputProps: { readOnly: true } }}
            />
            <ErrorMessage name="totalLength">
              {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
            </ErrorMessage>

            <Box display="flex" justifyContent="space-between">
              <Button variant="contained" color="secondary" onClick={onBack}>
                Back
              </Button>
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                Next
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

function addComponentHelper(components: RampComponent[], type: 'ramp' | 'landing', size: string): RampComponent[] {
  const existingIndex = components.findIndex(
    (component) => component.type === type && component.size === size
  );
  if (existingIndex >= 0) {
    const updatedComponents = [...components];
    updatedComponents[existingIndex].quantity += 1;
    return updatedComponents;
  } else {
    return [...components, { type, size, quantity: 1 }];
  }
}

function calculateTotalLength(components: RampComponent[]): number {
  return components.reduce((total, component) => {
    if (component.type === 'ramp' && component.size) {
      const length = parseInt(component.size.replace('ft', ''), 10);
      return total + length * component.quantity;
    }
    return total;
  }, 0);
}

export default RampConfigurationForm;