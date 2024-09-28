// src/types/Job.ts

export enum JobStage {
  REQUESTED = 'REQUESTED',
  CONTACTED = 'CONTACTED',
  QUOTE_SENT = 'QUOTE_SENT',
  QUOTE_ACCEPTED = 'QUOTE_ACCEPTED',
  PAID = 'PAID',
  SCHEDULED = 'SCHEDULED',
  INSTALLED = 'INSTALLED',
  REMOVAL_SCHEDULED = 'REMOVAL_SCHEDULED',
  REMOVED = 'REMOVED',
  COMPLETED = 'COMPLETED'
}

export interface RampComponent {
  type: 'ramp' | 'landing';
  size: string;
  quantity: number;
  width?: number; // Optional width for landings
}

export interface RampConfiguration {
  components: RampComponent[];
  totalLength: number;
  rentalDuration?: number; // Make rentalDuration optional
}

export interface Schedule {
  date: string | null; // Changed from Date to string
  timeSlot: string;
}

export interface Job {
  _id?: string; // Make _id optional
  stage: JobStage;
  customerInfo: CustomerInfo;
  rampConfiguration: RampConfiguration;
  pricing: {
    deliveryFee: number;
    installFee: number;
    monthlyRate: number;
    upfrontFee: number;
  };
  installationSchedule?: Schedule;
  removalSchedule?: Schedule;
  communicationLog?: Array<{
    date: string;
    type: 'email' | 'phone' | 'in-person' | 'system';
    notes: string;
  }>;
  createdAt?: string;
  updatedAt?: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  installAddress: string;
  mobilityAids?: string[];
  notes?: string;
}

export interface Pricing {
  deliveryFee: number;
  installFee: number;
  monthlyRate: number;
  upfrontFee: number;
}