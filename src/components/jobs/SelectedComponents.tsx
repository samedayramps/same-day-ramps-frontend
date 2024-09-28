// src/components/jobs/SelectedComponents.tsx

import React from 'react';
import { Box, Typography, IconButton, TextField, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { RampComponent } from '../../types/Job';

interface Props {
  components: RampComponent[];
  onRemove: (index: number) => void;
  onQuantityChange: (index: number, quantity: number) => void;
}

const SelectedComponents: React.FC<Props> = ({ components, onRemove, onQuantityChange }) => {
  return (
    <Box mt={2}>
      <Typography variant="subtitle1" gutterBottom>Selected Components</Typography>
      <List dense>
        {components.map((component, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={`${component.type} (${component.size})`}
            />
            <TextField
              type="number"
              size="small"
              InputProps={{ inputProps: { min: 1 } }}
              value={component.quantity}
              onChange={(e) => {
                const quantity = parseInt(e.target.value, 10) || 1;
                onQuantityChange(index, quantity);
              }}
              style={{ width: '60px', marginRight: '8px' }}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => onRemove(index)} size="small">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SelectedComponents;