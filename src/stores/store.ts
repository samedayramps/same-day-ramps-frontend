// src/stores/store.ts
import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobsSlice';
import rentalRequestsReducer from './rentalRequestsSlice';
import pricingVariablesReducer from './pricingVariablesSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    rentalRequests: rentalRequestsReducer,
    pricingVariables: pricingVariablesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
