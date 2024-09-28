// src/types/PricingCalculation.ts
export interface PricingCalculation {
    deliveryFee: number;
    installFee: number;
    monthlyRate: number;
    discount: number;
    totalUpfront: number;
  }