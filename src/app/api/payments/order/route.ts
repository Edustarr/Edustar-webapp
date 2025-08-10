import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import {
  StandardCheckoutClient,
  Env,
  StandardCheckoutPayRequest,
} from 'pg-sdk-node';

const CLIENT_ID = process.env.PHONEPE_CLIENT_ID!;
const CLIENT_SECRET = process.env.PHONEPE_CLIENT_SECRET!;
const CLIENT_VERSION = Number(process.env.PHONEPE_CLIENT_VERSION || 1);
const BASE_URL = process.env.BASE_URL!;
const ENVIRONMENT =
  process.env.NODE_ENV === 'production' ? Env.PRODUCTION : Env.SANDBOX;

const phonePeClient = StandardCheckoutClient.getInstance(
  CLIENT_ID,
  CLIENT_SECRET,
  CLIENT_VERSION,
  ENVIRONMENT
);

export async function POST(req: NextRequest) {
  try {
    const { amount, redirectTo } = await req.json();

    if (!amount || typeof amount !== 'number' || amount * 100 < 100) {
      return NextResponse.json(
        { error: 'Invalid amount (min is ₹1.00)' },
        { status: 400 }
      );
    }

    const merchantOrderId = randomUUID();
    const amountInPaise = amount * 100;

    const request = StandardCheckoutPayRequest.builder()
      .merchantOrderId(merchantOrderId)
      .amount(amountInPaise)
      .redirectUrl(redirectTo || `${BASE_URL}/payment-success`)
      .build();

    const response = await phonePeClient.pay(request);


    if (!response?.redirectUrl) {
      return NextResponse.json(
        { error: 'Missing redirectUrl from PhonePe' },
        { status: 500 }
      );
    }

    // Option 1: Return URL to frontend
    return NextResponse.json({
      success: true,
      paymentUrl: response.redirectUrl,
      merchantOrderId,
    });

    // Option 2: Uncomment to auto-redirect from the backend
    // return NextResponse.redirect(response.redirectUrl);
  } catch (err: any) {
    console.error('PhonePe pay() error:', err?.response?.data || err);
    return NextResponse.json(
      { error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
