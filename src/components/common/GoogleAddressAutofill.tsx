/// <reference types="google.maps" />

import React, { useRef, useEffect } from 'react';
import { TextField } from '@mui/material';
import { loadGoogleMapsApi } from '../../utils/loadGoogleMapsApi';

interface GoogleAddressAutofillProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
}

const GoogleAddressAutofill: React.FC<GoogleAddressAutofillProps> = ({ value, onChange, label, fullWidth = true, margin = 'normal' }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const initializeAutocomplete = async () => {
      try {
        await loadGoogleMapsApi(process.env.REACT_APP_MAP_API_KEY || '');
        if (!inputRef.current) return;

        const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
          types: ['address'],
          componentRestrictions: { country: 'us' }, // Restrict to US addresses
        });

        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (place.formatted_address) {
            onChange(place.formatted_address);
          }
        });
      } catch (error) {
        console.error('Failed to load Google Maps API', error);
      }
    };

    initializeAutocomplete();
  }, [onChange]);

  return (
    <TextField
      inputRef={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label={label}
      fullWidth={fullWidth}
      margin={margin}
    />
  );
};

export default GoogleAddressAutofill;