import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search')?.toLowerCase().trim() || '';
    const profession = searchParams.get('profession') || '';
    const status = searchParams.get('status') || '';
    const format = searchParams.get('format') || 'json';

    let records = db.getAll();

    // Apply filters
    if (search) {
      records = records.filter(
        (r) =>
          r.name.toLowerCase().includes(search) ||
          r.email.toLowerCase().includes(search) ||
          r.phone.includes(search) ||
          r.registrationId.toLowerCase().includes(search) ||
          r.city.toLowerCase().includes(search) ||
          (r.problemToSolve && r.problemToSolve.toLowerCase().includes(search))
      );
    }

    if (profession && profession !== 'ALL') {
      records = records.filter((r) => r.profession.toLowerCase() === profession.toLowerCase());
    }

    if (status && status !== 'ALL') {
      records = records.filter((r) => r.status === status);
    }

    // CSV export mode
    if (format === 'csv') {
      const headers = [
        'Registration ID',
        'Date',
        'Time',
        'Name',
        'Email',
        'Phone',
        'City',
        'Profession',
        'Problem to Solve',
        'Course',
        'Payment ID',
        'Order ID',
        'Amount',
        'Status',
      ];

      const csvRows = [headers.join(',')];

      records.forEach((r) => {
        const row = [
          `"${r.registrationId}"`,
          `"${r.date}"`,
          `"${r.time}"`,
          `"${r.name.replace(/"/g, '""')}"`,
          `"${r.email}"`,
          `"${r.phone}"`,
          `"${r.city.replace(/"/g, '""')}"`,
          `"${r.profession.replace(/"/g, '""')}"`,
          `"${(r.problemToSolve || '').replace(/"/g, '""')}"`,
          `"${r.course}"`,
          `"${r.paymentId}"`,
          `"${r.orderId}"`,
          r.amount,
          `"${r.status}"`,
        ];
        csvRows.push(row.join(','));
      });

      const csvString = csvRows.join('\n');

      return new NextResponse(csvString, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename=veeje_registrations_${new Date().toISOString().slice(0, 10)}.csv`,
        },
      });
    }

    const analytics = db.getAnalytics();

    return NextResponse.json({
      success: true,
      analytics,
      registrations: records,
    });
  } catch (error: any) {
    return NextResponse.json({ error: 'SERVER_ERROR', message: error.message }, { status: 500 });
  }
}
