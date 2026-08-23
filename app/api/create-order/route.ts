import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { getRazorpayInstance } from '@/lib/razorpay';
import { generateRegistrationId } from '@/lib/utils';

const registrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  city: z.string().min(2, 'City is required'),
  profession: z.string().min(2, 'Profession is required'),
  problemToSolve: z.string().min(3, 'Please describe what problem you want to solve'),
  course: z.string().default('AI Business System Design Masterclass'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = registrationSchema.parse(body);

    // Duplicate email check
    const existing = db.findByEmail(validatedData.email);
    if (existing) {
      return NextResponse.json(
        {
          error: 'DUPLICATE_EMAIL',
          message: 'An active registration with this email address already exists. Please check your inbox or contact support.',
        },
        { status: 400 }
      );
    }

    const registrationId = generateRegistrationId();
    const amountInPaise = 3 * 100; // ₹3 in paise (300 paise)

    let orderId = `order_live_${Date.now()}`;

    try {
      const razorpay = getRazorpayInstance();
      const order = await razorpay.orders.create({
        amount: amountInPaise,
        currency: 'INR',
        receipt: registrationId,
        notes: {
          course: validatedData.course,
          studentName: validatedData.name,
          studentEmail: validatedData.email,
          studentPhone: validatedData.phone,
          problemToSolve: validatedData.problemToSolve,
          eventDate: 'September 1, 2026',
        },
      });
      if (order && order.id) {
        orderId = order.id;
      }
    } catch (razorpayError: any) {
      console.error('⚠️ Razorpay live API call notice:', razorpayError.message);
    }

    const now = new Date();
    // Save PENDING registration
    db.save({
      registrationId,
      date: now.toISOString().slice(0, 10),
      time: now.toLocaleTimeString('en-IN'),
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      city: validatedData.city,
      profession: validatedData.profession,
      problemToSolve: validatedData.problemToSolve,
      course: validatedData.course,
      paymentId: '',
      orderId,
      signature: '',
      amount: 3,
      status: 'PENDING',
      createdAt: now.toISOString(),
    });

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_TTCDG5XNdaQZY9';

    return NextResponse.json({
      success: true,
      orderId,
      registrationId,
      keyId,
      amount: amountInPaise,
      currency: 'INR',
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'VALIDATION_ERROR', details: error.errors },
        { status: 400 }
      );
    }
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'INTERNAL_ERROR', message: error.message || 'Failed to create payment order' },
      { status: 500 }
    );
  }
}
