import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import phonePeClient from '@/lib/phonepayClient';
import { StandardCheckoutPayRequest } from 'pg-sdk-node';

const BASE_URL = process.env.BASE_URL!;
export async function POST(req: NextRequest) {
  try {
    const { amount, redirectTo } = await req.json();

    if (!amount || typeof amount !== 'number' || amount * 100 < 100) {
      return NextResponse.json(
        { error: 'Invalid amount (min is ₹1.00)' },
        { status: 400 }
      );
    }

    const merchantOrderId = randomUUID().trim();
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
