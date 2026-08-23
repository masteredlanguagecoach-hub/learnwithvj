import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendConfirmationEmail } from '@/lib/mailer';
import { verifyRazorpaySignature } from '@/lib/razorpay';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderId, paymentId, signature, registrationId } = body;

    if (!orderId || !paymentId || !registrationId) {
      return NextResponse.json(
        { error: 'INVALID_PAYLOAD', message: 'Missing required payment verification details' },
        { status: 400 }
      );
    }

    // Check duplicate payment ID
    const duplicatePayment = db.findByPaymentId(paymentId);
    if (duplicatePayment) {
      return NextResponse.json({
        success: true,
        message: 'Payment already verified previously',
        registrationId: duplicatePayment.registrationId,
        studentName: duplicatePayment.name,
        courseName: duplicatePayment.course,
        amountPaid: duplicatePayment.amount,
        paymentId: duplicatePayment.paymentId,
      });
    }

    // Verify signature securely on backend
    const isValid = verifyRazorpaySignature(orderId, paymentId, signature || '');
    if (!isValid) {
      return NextResponse.json(
        { error: 'SIGNATURE_VERIFICATION_FAILED', message: 'Payment signature could not be verified' },
        { status: 400 }
      );
    }

    // Retrieve pending registration record
    let record = db.findByOrderId(orderId) || db.getAll().find((r) => r.registrationId === registrationId);

    if (!record) {
      return NextResponse.json(
        { error: 'RECORD_NOT_FOUND', message: 'Associated registration record was not found' },
        { status: 404 }
      );
    }

    // Update status to SUCCESS
    record.status = 'SUCCESS';
    record.paymentId = paymentId;
    record.signature = signature || 'verified_dev_signature';
    db.save(record);

    // Send confirmation email via Nodemailer asynchronously
    sendConfirmationEmail({
      toEmail: record.email,
      studentName: record.name,
      courseName: record.course,
      amountPaid: record.amount,
      paymentId: record.paymentId,
      registrationId: record.registrationId,
    }).catch((emailErr) => {
      console.error('Email dispatch notice:', emailErr);
    });

    return NextResponse.json({
      success: true,
      registrationId: record.registrationId,
      studentName: record.name,
      courseName: record.course,
      amountPaid: record.amount,
      paymentId: record.paymentId,
    });
  } catch (error: any) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: 'VERIFICATION_ERROR', message: error.message || 'Payment verification failed' },
      { status: 500 }
    );
  }
}
