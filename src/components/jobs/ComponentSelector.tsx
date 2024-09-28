import React from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';

interface Props {
  addComponent: (type: 'ramp' | 'landing', size: string) => void;
}

const ComponentSelector: React.FC<Props> = ({ addComponent }) => {
  const rampOptions = ['4ft', '5ft', '6ft', '7ft', '8ft'];
  const landingOptions = ['5x5ft', '5x4ft', '5x8ft'];

  return (
    <Box mt={2}>
      <Typography variant="subtitle1" gutterBottom>Add Components</Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle2">Ramps</Typography>
        </Grid>
        {rampOptions.map((option) => (
          <Grid item xs={4} sm={2} key={option}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              size="small"
              onClick={() => addComponent('ramp', option)}
            >
              {option}
            </Button>
          </Grid>
        ))}
        <Grid item xs={12} style={{ marginTop: '8px' }}>
          <Typography variant="subtitle2">Landings</Typography>
        </Grid>
        {landingOptions.map((option) => (
          <Grid item xs={4} key={option}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              size="small"
              onClick={() => addComponent('landing', option)}
            >
              {option}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ComponentSelector;