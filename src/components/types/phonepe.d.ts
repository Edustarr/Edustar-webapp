export interface PhonePeSDK {
  init: (config: { token: string; environment: string }) => Promise<void>;
  startPayment: () => void;
}

export interface PaymentResponse {
  success: boolean;
  token?: string;
  merchantOrderId?: string;
  error?: string;
}

declare global {
  interface Window {
    PhonePe?: PhonePeSDK;
  }
}