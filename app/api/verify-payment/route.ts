import { NextResponse } from 'next/server';
import { db, RegistrationRecord } from '@/lib/db';
import { sendConfirmationEmail } from '@/lib/mailer';
import { verifyRazorpaySignature } from '@/lib/razorpay';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      orderId,
      paymentId,
      signature,
      registrationId,
      name,
      email,
      phone,
      city,
      profession,
      problemToSolve,
      course,
    } = body;

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

    // Retrieve pending registration record or reconstruct on the fly for stateless serverless containers
    let record: RegistrationRecord | undefined =
      db.findByOrderId(orderId) || db.getAll().find((r) => r.registrationId === registrationId);

    const now = new Date();

    if (!record) {
      console.log(`ℹ️ Reconstructing registration record ${registrationId} on the fly for serverless execution...`);
      record = {
        registrationId: registrationId || `VEEJE-${Date.now()}`,
        date: now.toISOString().slice(0, 10),
        time: now.toLocaleTimeString('en-IN'),
        name: name || 'Student',
        email: email || '',
        phone: phone || '',
        city: city || '',
        profession: profession || '',
        problemToSolve: problemToSolve || '',
        course: course || 'AI Business System Design Masterclass',
        paymentId,
        orderId,
        signature: signature || 'verified_signature',
        amount: 111,
        status: 'SUCCESS',
        createdAt: now.toISOString(),
      };
    } else {
      record.status = 'SUCCESS';
      record.paymentId = paymentId;
      record.amount = 111;
      record.signature = signature || 'verified_signature';
    }

    // Save record to local store
    db.save(record);

    // EXPLICITLY AWAIT Google Sheets Webhook Sync so Vercel lambda does not terminate early
    try {
      await db.syncToGoogleSheets(record);
    } catch (sheetErr: any) {
      console.error('⚠️ Google Sheets sync notice:', sheetErr.message);
    }

    // Send confirmation email asynchronously
    sendConfirmationEmail({
      toEmail: record.email,
      studentName: record.name,
      courseName: record.course,
      amountPaid: 111,
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
      amountPaid: 111,
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
