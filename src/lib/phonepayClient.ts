import {
  StandardCheckoutClient,
  Env,
  StandardCheckoutPayRequest,
} from 'pg-sdk-node';

const CLIENT_ID = process.env.PHONEPE_CLIENT_ID!;
const CLIENT_SECRET = process.env.PHONEPE_CLIENT_SECRET!;
const CLIENT_VERSION = Number(process.env.PHONEPE_CLIENT_VERSION || 1);
const BASE_URL = process.env.BASE_URL!;
const ENVIRONMENT =Env.PRODUCTION;

const phonePeClient = StandardCheckoutClient.getInstance(
  CLIENT_ID,
  CLIENT_SECRET,
  CLIENT_VERSION,
  ENVIRONMENT
);
export default phonePeClient;