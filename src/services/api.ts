// src/services/api.ts

import axios from 'axios';
import { Job, JobStage, QuoteStatus, AgreementStatus } from '../types/Job';
import { RentalRequest } from '../types/RentalRequest';
import { PricingVariables } from '../types/PricingVariables';
import { PricingCalculation } from '../types/PricingCalculation';
import { RampConfiguration } from '../types/Job';

const USE_LOCAL_API = true; // Set this to false to use the production API

const API_BASE_URL = USE_LOCAL_API 
  ? 'http://localhost:3001/api'
  : (process.env.REACT_APP_API_BASE_URL || 'https://samedayramps-016e8e090b17.herokuapp.com/api');

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const jobsApi = {
  getAll: () => api.get<Job[]>('/jobs'),
  getById: (id: string) => api.get<Job>(`/jobs/${id}`),
  create: (job: Partial<Job>) => api.post<Job>('/jobs', {
    ...job,
    quoteStatus: job.quoteStatus || QuoteStatus.NOT_SENT,
    agreementStatus: job.agreementStatus || AgreementStatus.NOT_SENT,
  }),
  update: (id: string, data: Partial<Job>) => {
    console.log('Sending job update to backend:', { id, data });
    return api.put<Job>(`/jobs/${id}`, {
      ...data,
      quoteStatus: data.quoteStatus || QuoteStatus.NOT_SENT,
      agreementStatus: data.agreementStatus || AgreementStatus.NOT_SENT,
    }).then(response => {
      console.log('Received response from backend:', response.data);
      return response;
    });
  },
  delete: (id: string) => api.delete(`/jobs/${id}`),
  sendQuote: (id: string) => api.post(`/jobs/${id}/send-quote`),
  updateStage: (id: string, stage: JobStage) => api.put(`/jobs/${id}/stage`, { stage }),
  calculatePricing: (rampConfiguration: RampConfiguration, installAddress: string, warehouseAddress: string) =>
    api.post<PricingCalculation>('/jobs/calculate-pricing', { rampConfiguration, installAddress, warehouseAddress }),
  initiateStripePayment: (jobId: string) => api.post<{ clientSecret: string }>(`/jobs/${jobId}/initiate-payment`),
  initiateESignaturesSigning: (jobId: string) => api.post<{ signingUrl: string }>(`/jobs/${jobId}/initiate-signing`),
};

export const rentalRequestsApi = {
  getAll: () => api.get<RentalRequest[]>('/rental-requests'),
  getById: (id: string) => api.get<RentalRequest>(`/rental-requests/${id}`),
  create: (rentalRequest: Omit<RentalRequest, '_id' | 'status' | 'salesStage' | 'createdAt' | 'updatedAt'>) =>
    api.post<RentalRequest>('/rental-requests', rentalRequest),
  archive: (id: string) => api.post(`/rental-requests/${id}/archive`),
  delete: (id: string) => api.delete(`/rental-requests/${id}`),
  // New method to create a job from a rental request
  createJobFromRentalRequest: (id: string) => api.post<Job>(`/rental-requests/${id}/create-job`),
  updateStatus: (id: string, status: 'pending' | 'job created' | 'rejected') =>
    api.put<RentalRequest>(`/rental-requests/${id}/status`, { status }),
};

export const pricingVariablesApi = {
  get: () => api.get<PricingVariables>('/pricing-variables'),
  update: (variables: PricingVariables) => api.put<PricingVariables>('/pricing-variables', variables),
};

export const calculatePricing = (
  rampConfiguration: RampConfiguration,
  installAddress: string,
  warehouseAddress: string
) =>
  api.post<PricingCalculation>('/jobs/calculate-pricing', {
    rampConfiguration,
    installAddress,
    warehouseAddress,
  });

export default api;