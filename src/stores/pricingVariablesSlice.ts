// src/stores/pricingVariablesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PricingVariables } from '../types/PricingVariables';
import { pricingVariablesApi } from '../services/api';

interface PricingVariablesState {
  variables: PricingVariables | null;
  loading: boolean;
  error: string | null;
}

const initialState: PricingVariablesState = {
  variables: null,
  loading: false,
  error: null,
};

export const fetchPricingVariables = createAsyncThunk('pricingVariables/fetchPricingVariables', async () => {
  const response = await pricingVariablesApi.get();
  return response.data;
});

export const updatePricingVariables = createAsyncThunk(
  'pricingVariables/updatePricingVariables',
  async (variables: PricingVariables) => {
    const response = await pricingVariablesApi.update(variables);
    return response.data;
  }
);

const pricingVariablesSlice = createSlice({
  name: 'pricingVariables',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPricingVariables.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPricingVariables.fulfilled, (state, action) => {
        state.loading = false;
        state.variables = action.payload;
      })
      .addCase(fetchPricingVariables.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch pricing variables';
      })
      .addCase(updatePricingVariables.fulfilled, (state, action) => {
        state.variables = action.payload;
      });
  },
});

export default pricingVariablesSlice.reducer;