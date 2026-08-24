import { NextResponse } from 'next/server';
import { db, RegistrationRecord } from '@/lib/db';

function parseRecordDate(record: RegistrationRecord): Date | null {
  if (record.createdAt) {
    const d = new Date(record.createdAt);
    if (!isNaN(d.getTime())) return d;
  }
  if (record.date) {
    const d = new Date(record.date);
    if (!isNaN(d.getTime())) return d;
  }
  return null;
}

function matchesDateFilter(
  record: RegistrationRecord,
  datePreset: string,
  startDateStr?: string,
  endDateStr?: string
): boolean {
  if (!datePreset || datePreset === 'ALL') return true;

  const rDate = parseRecordDate(record);
  if (!rDate) return true; // If date cannot be parsed, keep record

  const now = new Date();

  if (datePreset === 'TODAY') {
    return (
      rDate.getFullYear() === now.getFullYear() &&
      rDate.getMonth() === now.getMonth() &&
      rDate.getDate() === now.getDate()
    );
  }

  if (datePreset === 'YESTERDAY') {
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    return (
      rDate.getFullYear() === yesterday.getFullYear() &&
      rDate.getMonth() === yesterday.getMonth() &&
      rDate.getDate() === yesterday.getDate()
    );
  }

  if (datePreset === 'WEEKLY') {
    const sevenDaysAgo = new Date(now);
    sevenDaysAgo.setDate(now.getDate() - 7);
    sevenDaysAgo.setHours(0, 0, 0, 0);
    return rDate >= sevenDaysAgo;
  }

  if (datePreset === 'MONTHLY') {
    const thirtyDaysAgo = new Date(now);
    thirtyDaysAgo.setDate(now.getDate() - 30);
    thirtyDaysAgo.setHours(0, 0, 0, 0);
    return rDate >= thirtyDaysAgo;
  }

  if (datePreset === 'YEARLY') {
    const oneYearAgo = new Date(now);
    oneYearAgo.setFullYear(now.getFullYear() - 1);
    oneYearAgo.setHours(0, 0, 0, 0);
    return rDate >= oneYearAgo;
  }

  if (datePreset === 'CUSTOM') {
    let startValid = true;
    let endValid = true;

    if (startDateStr) {
      const startD = new Date(startDateStr);
      startD.setHours(0, 0, 0, 0);
      if (!isNaN(startD.getTime())) {
        startValid = rDate >= startD;
      }
    }

    if (endDateStr) {
      const endD = new Date(endDateStr);
      endD.setHours(23, 59, 59, 999);
      if (!isNaN(endD.getTime())) {
        endValid = rDate <= endD;
      }
    }

    return startValid && endValid;
  }

  return true;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search')?.toLowerCase().trim() || '';
    const profession = searchParams.get('profession') || '';
    const status = searchParams.get('status') || '';
    const datePreset = searchParams.get('datePreset') || 'ALL';
    const startDate = searchParams.get('startDate') || '';
    const endDate = searchParams.get('endDate') || '';
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
    mergedRecords.sort((a, b) => {
      const dateA = parseRecordDate(a)?.getTime() || 0;
      const dateB = parseRecordDate(b)?.getTime() || 0;
      return dateB - dateA;
    });

    // Apply Search Filter
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

    // Apply Profession Filter
    if (profession && profession !== 'ALL') {
      mergedRecords = mergedRecords.filter((r) => r.profession.toLowerCase() === profession.toLowerCase());
    }

    // Apply Status Filter
    if (status && status !== 'ALL') {
      mergedRecords = mergedRecords.filter((r) => r.status === status);
    }

    // Apply Date Range & Preset Filter
    mergedRecords = mergedRecords.filter((r) => matchesDateFilter(r, datePreset, startDate, endDate));

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
          'Content-Disposition': `attachment; filename=veeje_registrations_${datePreset.toLowerCase()}_${new Date()
            .toISOString()
            .slice(0, 10)}.csv`,
        },
      });
    }

    const analytics = db.calculateAnalytics(mergedRecords);

    return NextResponse.json({
      success: true,
      analytics,
      registrations: mergedRecords,
      filteredCount: mergedRecords.length,
    });
  } catch (error: any) {
    return NextResponse.json({ error: 'SERVER_ERROR', message: error.message }, { status: 500 });
  }
}
