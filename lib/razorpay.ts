import crypto from 'crypto';
import Razorpay from 'razorpay';

export function getRazorpayInstance() {
  const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_TTCDG5XNdaQZY9';
  const key_secret = process.env.RAZORPAY_KEY_SECRET || 'mfG6jptH4dv4i8vywvh5Wm6t';

  return new Razorpay({
    key_id,
    key_secret,
  });
}

/**
 * Verify Razorpay payment signature securely on backend using HMAC-SHA256.
 * Formula: HMAC_SHA256(order_id + "|" + payment_id, secret) === signature
 */
export function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const secret = process.env.RAZORPAY_KEY_SECRET || 'mfG6jptH4dv4i8vywvh5Wm6t';

  try {
    const generatedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${orderId}|${paymentId}`)
      .digest('hex');

    return generatedSignature === signature;
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}
