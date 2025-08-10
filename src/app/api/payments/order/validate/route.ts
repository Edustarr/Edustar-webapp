import { NextRequest, NextResponse } from 'next/server';
import { StandardCheckoutClient, Env } from 'pg-sdk-node';

// Load config
const CLIENT_ID = process.env.PHONEPE_CLIENT_ID!;
const CLIENT_SECRET = process.env.PHONEPE_CLIENT_SECRET!;
const CLIENT_VERSION = parseInt(process.env.PHONEPE_CLIENT_VERSION || '1');
const ENVIRONMENT = process.env.NODE_ENV === 'production' ? Env.PRODUCTION : Env.SANDBOX;
const env = Env.SANDBOX; // Assuming you want to use sandbox environment

// Initialize PhonePe SDK client
const client = StandardCheckoutClient.getInstance(
  CLIENT_ID,
  CLIENT_SECRET,
  CLIENT_VERSION,
  ENVIRONMENT
);

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 400 }
      );
    }

    const body = await req.json();
    const merchantOrderId = body?.merchantOrderId?.trim();
    const orderId = body?.orderId?.trim();

    if (!merchantOrderId || !orderId) {
      console.warn('❌ Missing merchantOrderId or orderId');
      return NextResponse.json(
        { error: 'merchantOrderId and orderId are required in body' },
        { status: 400 }
      );
    }

    // Make sure you are correctly calling the PhonePe SDK method
    const response = await client.getTransactionStatus(merchantOrderId);

    if (!response) {
      console.error('🚫 Invalid response from PhonePe SDK:', response);
      return NextResponse.json(
        { error: 'Invalid response from PhonePe', raw: response },
        { status: 502 }
      );
    }


    const result = {
      orderId: response.orderId,
      state: response.state,
      amount: response.amount,
      expireAt: response.expireAt,
      paymentDetails: response.paymentDetails ?? [],
    };

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error('🔥 [PhonePe Order Validation Error]:', error);
    return NextResponse.json(
      {
        error: 'Failed to validate PhonePe order',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}
