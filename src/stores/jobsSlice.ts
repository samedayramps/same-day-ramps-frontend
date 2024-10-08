import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { jobsApi, calculatePricing } from '../services/api';
import { Job, JobStage, QuoteStatus, AgreementStatus } from '../types/Job';
import { RootState } from './store';
import { PricingCalculation } from '../types/PricingCalculation';
// Remove the unused import
// import { AxiosError } from 'axios';

interface JobsState {
  jobs: Job[];
  currentJob: Job | null;
  isLoading: boolean;
  error: string | null;
  installAddress?: string;
}

const initialState: JobsState = {
  jobs: [],
  currentJob: null,
  isLoading: false,
  error: null,
  installAddress: '',
};

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await jobsApi.getAll();
  return response.data;
});

export const fetchJob = createAsyncThunk('jobs/fetchJob', async (id: string) => {
  const response = await jobsApi.getById(id);
  return response.data;
});

export const createJob = createAsyncThunk(
  'jobs/createJob',
  async (job: Partial<Job>, { rejectWithValue }) => {
    try {
      const jobWithDefaults = {
        ...job,
        quoteStatus: job.quoteStatus || QuoteStatus.NOT_SENT,
        agreementStatus: job.agreementStatus || AgreementStatus.NOT_SENT,
      };
      const response = await jobsApi.create(jobWithDefaults);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

export const updateJob = createAsyncThunk(
  'jobs/updateJob',
  async (job: Partial<Job>, { getState }) => {
    const state = getState() as RootState;
    const currentJob = state.jobs.currentJob;
    if (!currentJob) throw new Error('No current job');
    const updatedJob = { ...currentJob, ...job };
    const response = await jobsApi.update(updatedJob._id!, updatedJob);
    return response.data;
  }
);

export const updateCurrentJob = createAsyncThunk<Job, Partial<Job>, { state: RootState }>(
  'jobs/updateCurrentJob',
  async (jobData, { getState }) => {
    const state = getState();
    const currentJob = state.jobs.currentJob;
    if (!currentJob) throw new Error('No current job');
    return { ...currentJob, ...jobData };
  }
);

export const recalculatePricing = createAsyncThunk<PricingCalculation, void, { state: RootState }>(
  'jobs/recalculatePricing',
  async (_, { getState }) => {
    const state = getState();
    const currentJob = state.jobs.currentJob;
    if (!currentJob) throw new Error('No current job');
    const response = await calculatePricing(
      currentJob.rampConfiguration,
      currentJob.customerInfo.installAddress,
      process.env.REACT_APP_WAREHOUSE_ADDRESS || ''
    );
    return response.data;
  }
);

export const updateJobStage = createAsyncThunk(
  'jobs/updateJobStage',
  async ({ id, stage }: { id: string; stage: JobStage }) => {
    const response = await jobsApi.updateStage(id, stage);
    return response.data;
  }
);

export const deleteJob = createAsyncThunk('jobs/deleteJob', async (id: string) => {
  await jobsApi.delete(id);
  return id;
});

export const initiateStripePayment = createAsyncThunk(
  'jobs/initiateStripePayment',
  async (jobId: string) => {
    const response = await jobsApi.initiateStripePayment(jobId);
    return response.data;
  }
);

export const initiateESignaturesSigning = createAsyncThunk(
  'jobs/initiateESignaturesSigning',
  async (jobId: string) => {
    const response = await jobsApi.initiateESignaturesSigning(jobId);
    return response.data;
  }
);

export const createStripePaymentLink = createAsyncThunk(
  'jobs/createStripePaymentLink',
  async (jobId: string, { getState }) => {
    const state = getState() as RootState;
    const currentJob = state.jobs.currentJob;
    
    if (!currentJob) {
      throw new Error('No current job');
    }

    const response = await jobsApi.createStripePaymentLink(jobId, currentJob.pricing);
    return response.data.paymentLink;
  }
);

// New Thunk for Creating Agreement Link
export const createAgreementLink = createAsyncThunk(
  'jobs/createAgreementLink',
  async (jobId: string) => {
    const response = await jobsApi.createAgreementLink(jobId);
    return response.data.agreementLink;
  }
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setInstallAddress(state, action: PayloadAction<string>) {
      state.installAddress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      })
      .addCase(fetchJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentJob = action.payload;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.currentJob = action.payload;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.currentJob = action.payload;
      })
      .addCase(updateCurrentJob.fulfilled, (state, action) => {
        state.currentJob = action.payload;
      })
      .addCase(recalculatePricing.fulfilled, (state, action) => {
        if (state.currentJob) {
          state.currentJob.pricing = {
            ...state.currentJob.pricing,
            ...action.payload,
          };
        }
      })
      .addCase(recalculatePricing.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to recalculate pricing';
      })
      .addCase(updateJobStage.fulfilled, (state, action) => {
        if (state.currentJob) {
          state.currentJob.stage = action.payload.stage;
        }
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter(job => job._id !== action.payload);
        state.currentJob = null;
      })
      .addCase(initiateStripePayment.fulfilled, (state, action) => {
        // Handle successful payment initiation if needed
      })
      .addCase(initiateESignaturesSigning.fulfilled, (state, action) => {
        // Handle successful signing initiation if needed
      })
      .addCase(createStripePaymentLink.fulfilled, (state, action) => {
        if (state.currentJob) {
          state.currentJob.paymentLinkUrl = action.payload;
        }
      })
      .addCase(createAgreementLink.fulfilled, (state, action) => {
        if (state.currentJob) {
          state.currentJob.agreementLinkUrl = action.payload;
        }
      })
      .addCase(createAgreementLink.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to create agreement link';
      });
  },
});

export const { setInstallAddress } = jobsSlice.actions;

export default jobsSlice.reducer;