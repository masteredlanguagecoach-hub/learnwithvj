import { NextResponse } from 'next/server';
import { db, RegistrationRecord } from '@/lib/db';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search')?.toLowerCase().trim() || '';
    const profession = searchParams.get('profession') || '';
    const status = searchParams.get('status') || '';
    const format = searchParams.get('format') || 'json';

    // 1. Load local records
    let localRecords = db.getAll();

    // 2. Fetch live records from Google Sheets for serverless persistence
    let sheetRecords: RegistrationRecord[] = [];
    try {
      sheetRecords = await db.fetchFromGoogleSheets();
    } catch (err: any) {
      console.error('Notice reading Google Sheets in admin route:', err.message);
    }

    // 3. Merge records by Registration ID / Payment ID (preferring Google Sheets data)
    const recordMap = new Map<string, RegistrationRecord>();

    localRecords.forEach((r) => {
      if (r.registrationId) {
        recordMap.set(r.registrationId, r);
      }
    });

    sheetRecords.forEach((r) => {
      if (r.registrationId) {
        recordMap.set(r.registrationId, r);
      } else if (r.paymentId) {
        recordMap.set(r.paymentId, r);
      }
    });

    let mergedRecords = Array.from(recordMap.values());

    // Sort newest first
    mergedRecords.sort((a, b) => new Date(b.createdAt || b.date).getTime() - new Date(a.createdAt || a.date).getTime());

    // Apply filters
    if (search) {
      mergedRecords = mergedRecords.filter(
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
      mergedRecords = mergedRecords.filter((r) => r.profession.toLowerCase() === profession.toLowerCase());
    }

    if (status && status !== 'ALL') {
      mergedRecords = mergedRecords.filter((r) => r.status === status);
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

      mergedRecords.forEach((r) => {
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

    const analytics = db.calculateAnalytics(mergedRecords);

    return NextResponse.json({
      success: true,
      analytics,
      registrations: mergedRecords,
    });
  } catch (error: any) {
    return NextResponse.json({ error: 'SERVER_ERROR', message: error.message }, { status: 500 });
  }
}
