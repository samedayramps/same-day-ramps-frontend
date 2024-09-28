// src/types/RentalRequest.ts
export enum SalesStage {
    RENTAL_REQUEST = 'RENTAL_REQUEST',
    RENTAL_REQUEST_RECEIVED = 'RENTAL_REQUEST_RECEIVED',
    // Add other stages as needed
  }
  
  export interface CustomerInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }
  
  export interface RampDetails {
    knowRampLength: boolean;
    rampLength?: number;
    knowRentalDuration: boolean;
    rentalDuration?: number;
    installTimeframe: string;
    mobilityAids: string[];
  }
  
  export interface RentalRequest {
    _id: string;
    customerInfo: CustomerInfo;
    rampDetails: RampDetails;
    installAddress: string;
    status: 'pending' | 'approved' | 'rejected' | 'archived';
    salesStage: SalesStage;
    customerId?: string;
    quoteId?: string;
    jobId?: string;
    createdAt: string;
    updatedAt: string;
  }