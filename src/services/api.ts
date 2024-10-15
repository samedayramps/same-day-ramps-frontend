// src/services/api.ts

import axios from 'axios';
import { Job, JobStage, QuoteStatus, AgreementStatus } from '../types/Job';
import { RentalRequest } from '../types/RentalRequest';
import { PricingVariables } from '../types/PricingVariables';
import { PricingCalculation } from '../types/PricingCalculation';
import { RampConfiguration } from '../types/Job';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://strangely-winning-dogfish.ngrok-free.app/api';

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

// Add a response interceptor for logging
api.interceptors.response.use(
  (response) => {
    console.log(`API Response for ${response.config.url}:`, response.data);
    return response;
  },
  (error) => {
    console.error(`API Error for ${error.config.url}:`, error.response?.data || error.message);
    return Promise.reject(error);
  }
);

const logApiCall = (methodName: string, ...args: any[]) => {
  console.log(`API Call: ${methodName}`, ...args);
};

export const jobsApi = {
  getAll: () => {
    logApiCall('jobsApi.getAll');
    return api.get<Job[]>('/jobs');
  },
  getById: (id: string) => {
    logApiCall('jobsApi.getById', { id });
    return api.get<Job>(`/jobs/${id}`);
  },
  create: (job: Partial<Job>) => {
    logApiCall('jobsApi.create', { job });
    return api.post<Job>('/jobs', {
      ...job,
      quoteStatus: job.quoteStatus || QuoteStatus.NOT_SENT,
      agreementStatus: job.agreementStatus || AgreementStatus.NOT_SENT,
    });
  },
  update: (id: string, data: Partial<Job>) => {
    logApiCall('jobsApi.update', { id, data });
    return api.put<Job>(`/jobs/${id}`, {
      ...data,
      quoteStatus: data.quoteStatus || QuoteStatus.NOT_SENT,
      agreementStatus: data.agreementStatus || AgreementStatus.NOT_SENT,
    });
  },
  delete: (id: string) => {
    logApiCall('jobsApi.delete', { id });
    return api.delete(`/jobs/${id}`);
  },
  updateStage: (id: string, stage: JobStage) => {
    logApiCall('jobsApi.updateStage', { id, stage });
    return api.put(`/jobs/${id}/stage`, { stage });
  },
  calculatePricing: (rampConfiguration: RampConfiguration, installAddress: string, warehouseAddress: string) => {
    logApiCall('jobsApi.calculatePricing', { rampConfiguration, installAddress, warehouseAddress });
    return api.post<PricingCalculation>('/jobs/calculate-pricing', { rampConfiguration, installAddress, warehouseAddress });
  },
  initiateStripePayment: (jobId: string) => {
    logApiCall('jobsApi.initiateStripePayment', { jobId });
    return api.post<{ clientSecret: string }>(`/jobs/${jobId}/initiate-payment`);
  },
  initiateESignaturesSigning: (jobId: string) => {
    logApiCall('jobsApi.initiateESignaturesSigning', { jobId });
    return api.post<{ signingUrl: string }>(`/jobs/${jobId}/initiate-signing`);
  },
  createStripePaymentLink: (jobId: string, pricing: Job['pricing']) => {
    logApiCall('jobsApi.createStripePaymentLink', { jobId, pricing });
    return api.post<{ paymentLink: string }>(`/jobs/${jobId}/create-payment-link`, { pricing });
  },
  createAgreementLink: (jobId: string) => {
    logApiCall('jobsApi.createAgreementLink', { jobId });
    return api.post<{ agreementLink: string }>(`/jobs/${jobId}/create-agreement-link`);
  },
  generateQuote: (id: string) => {
    logApiCall('jobsApi.generateQuote', { id });
    return api.post<{ message: string }>(`/jobs/${id}/generate-quote`);
  },
  previewQuote: (id: string) => {
    logApiCall('jobsApi.previewQuote', { id });
    return api.get<string>(`/jobs/${id}/preview-quote`);
  },
  sendGeneratedQuote: (id: string) => {
    logApiCall('jobsApi.sendGeneratedQuote', { id });
    return api.post<{ message: string }>(`/jobs/${id}/send-generated-quote`);
  },
  acceptQuote: (id: string) => {
    logApiCall('jobsApi.acceptQuote', { id });
    return api.post<{ message: string }>(`/jobs/${id}/accept-quote`);
  },
};

export const rentalRequestsApi = {
  getAll: () => {
    logApiCall('rentalRequestsApi.getAll');
    return api.get<RentalRequest[]>('/rental-requests');
  },
  getById: (id: string) => {
    logApiCall('rentalRequestsApi.getById', { id });
    return api.get<RentalRequest>(`/rental-requests/${id}`);
  },
  create: (rentalRequest: Omit<RentalRequest, '_id' | 'status' | 'salesStage' | 'createdAt' | 'updatedAt'>) => {
    logApiCall('rentalRequestsApi.create', { rentalRequest });
    return api.post<RentalRequest>('/rental-requests', rentalRequest);
  },
  archive: (id: string) => {
    logApiCall('rentalRequestsApi.archive', { id });
    return api.post(`/rental-requests/${id}/archive`);
  },
  delete: (id: string) => {
    logApiCall('rentalRequestsApi.delete', { id });
    return api.delete(`/rental-requests/${id}`);
  },
  createJobFromRentalRequest: (id: string) => {
    logApiCall('rentalRequestsApi.createJobFromRentalRequest', { id });
    return api.post<Job>(`/rental-requests/${id}/create-job`);
  },
  updateStatus: (id: string, status: 'pending' | 'job created' | 'rejected') => {
    logApiCall('rentalRequestsApi.updateStatus', { id, status });
    return api.put<RentalRequest>(`/rental-requests/${id}/status`, { status });
  },
};

export const pricingVariablesApi = {
  get: () => {
    logApiCall('pricingVariablesApi.get');
    return api.get<PricingVariables>('/pricing-variables');
  },
  update: (variables: PricingVariables) => {
    logApiCall('pricingVariablesApi.update', { variables });
    return api.put<PricingVariables>('/pricing-variables', variables);
  },
};

export const calculatePricing = (
  rampConfiguration: RampConfiguration,
  installAddress: string,
  warehouseAddress: string
) => {
  logApiCall('calculatePricing', { rampConfiguration, installAddress, warehouseAddress });
  return api.post<PricingCalculation>('/jobs/calculate-pricing', {
    rampConfiguration,
    installAddress,
    warehouseAddress,
  });
};

export default api;