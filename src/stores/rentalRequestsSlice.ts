// src/stores/rentalRequestsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RentalRequest } from '../types/RentalRequest';
import { rentalRequestsApi } from '../services/api';

interface RentalRequestsState {
  rentalRequests: RentalRequest[];
  loading: boolean;
  error: string | null;
}

const initialState: RentalRequestsState = {
  rentalRequests: [],
  loading: false,
  error: null,
};

export const fetchRentalRequests = createAsyncThunk('rentalRequests/fetchRentalRequests', async () => {
  const response = await rentalRequestsApi.getAll();
  return response.data;
});

// Other async thunks: createRentalRequest, archiveRentalRequest, deleteRentalRequest, etc.

const rentalRequestsSlice = createSlice({
  name: 'rentalRequests',
  initialState,
  reducers: {
    // Define synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRentalRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRentalRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.rentalRequests = action.payload;
      })
      .addCase(fetchRentalRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch rental requests';
      });
    // Handle other actions
  },
});

export default rentalRequestsSlice.reducer;