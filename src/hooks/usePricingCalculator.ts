// src/hooks/usePricingCalculator.ts

import { useEffect, useState, useCallback } from 'react';
import { RampComponent } from '../types/Job';
import { PricingVariables } from '../types/PricingVariables';
import { pricingVariablesApi } from '../services/api';
import { loadGoogleMapsApi } from '../utils/loadGoogleMapsApi';

interface PricingDetails {
  deliveryFee: number;
  installFee: number;
  monthlyRate: number;
  upfrontFee: number; // Add this line
}

const usePricingCalculator = (components: RampComponent[], installAddress: string) => {
  const [pricingVariables, setPricingVariables] = useState<PricingVariables | null>(null);
  const [pricing, setPricing] = useState<PricingDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPricingVariables = async () => {
      try {
        const response = await pricingVariablesApi.get();
        setPricingVariables(response.data);
        console.log('Fetched Pricing Variables:', response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch pricing variables');
      } finally {
        setLoading(false);
      }
    };

    fetchPricingVariables();
  }, []);

  const calculateDeliveryFee = useCallback(async (
    origin: string,
    destination: string,
    pricingVariables: PricingVariables
  ): Promise<number> => {
    const service = new google.maps.DistanceMatrixService();
    
    return new Promise((resolve, reject) => {
      service.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [destination],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.IMPERIAL,
        },
        (response, status) => {
          if (status === google.maps.DistanceMatrixStatus.OK && response) {
            const distance = response.rows[0].elements[0].distance.value / 1609.34; // Convert meters to miles
            console.log('Calculated Distance (miles):', distance);
            const deliveryFee = pricingVariables.baseDeliveryFee + (distance * pricingVariables.deliveryFeePerMile);
            resolve(Math.round(deliveryFee)); // Round to the nearest dollar
          } else {
            reject(new Error('Failed to calculate distance'));
          }
        }
      );
    });
  }, []);

  useEffect(() => {
    if (components.length > 0 && pricingVariables && installAddress) {
      console.log('Components:', components);
      console.log('Install Address:', installAddress);

      const calculatePricingDetails = async (
        components: RampComponent[],
        pricingVariables: PricingVariables,
        installAddress: string
      ): Promise<PricingDetails> => {
        let totalLength = 0;
        let installFee = pricingVariables.baseInstallFee; // Start with base install fee
        let monthlyRate = 0;

        components.forEach((component) => {
          if (component.type === 'ramp' && component.size) {
            const length = parseInt(component.size.replace('ft', ''), 10);
            totalLength += length * component.quantity;
          }
          installFee += pricingVariables.installFeePerComponent * component.quantity;
        });

        monthlyRate = totalLength * pricingVariables.rentalRatePerFt;

        // Load Google Maps API
        await loadGoogleMapsApi(process.env.REACT_APP_MAP_API_KEY || '');

        // Calculate delivery fee using Google Distance Matrix API
        const deliveryFee = await calculateDeliveryFee(pricingVariables.warehouseAddress, installAddress, pricingVariables);

        console.log('Total Length:', totalLength);
        console.log('Install Fee:', installFee);
        console.log('Monthly Rate:', monthlyRate);
        console.log('Delivery Fee:', deliveryFee);

        // Calculate upfront fee
        const upfrontFee = deliveryFee + installFee;

        // Round all prices to the nearest dollar
        return {
          deliveryFee: Math.round(deliveryFee),
          installFee: Math.round(installFee),
          monthlyRate: Math.round(monthlyRate),
          upfrontFee: Math.round(upfrontFee) // Add this line
        };
      };

      calculatePricingDetails(components, pricingVariables, installAddress)
        .then(pricingDetails => {
          console.log('Calculated Pricing Details:', pricingDetails);
          setPricing(pricingDetails);
        })
        .catch(err => {
          console.error('Error calculating pricing details:', err);
          setError('Failed to calculate pricing details');
        });
    }
  }, [components, pricingVariables, installAddress, calculateDeliveryFee]);

  return { pricing, loading, error };
};

export default usePricingCalculator;