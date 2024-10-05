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

export enum QuoteStatus {
  NOT_SENT = 'NOT_SENT',
  SENT = 'SENT',
  PAID = 'PAID'
}

export enum AgreementStatus {
  NOT_SENT = 'NOT_SENT',
  SENT = 'SENT',
  SIGNED = 'SIGNED'
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
  quotePaidOn?: string; // Add this line
  agreementSignedOn?: string; // Add this line
  quoteStatus: QuoteStatus; // Add this line
  agreementStatus: AgreementStatus; // Add this line
  stripeCustomerId?: string; // Add this line
  stripeInvoiceId?: string; // Add this line
  eSignaturesDocumentId?: string; // Add this line
  stripePaymentLink?: string; // Add this line
  paymentLinkUrl?: string; // Add this line
  agreementLinkUrl?: string; // New eSignatures.io Agreement Link
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