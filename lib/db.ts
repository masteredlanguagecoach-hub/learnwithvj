import fs from 'fs';
import path from 'path';

export interface RegistrationRecord {
  registrationId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  profession: string;
  problemToSolve: string;
  course: string;
  paymentId: string;
  orderId: string;
  signature: string;
  amount: number;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  createdAt: string;
}

const DB_FILE_PATH = path.join(process.cwd(), 'data_registrations.json');

// Memory cache for local dev / fast response times
let inMemoryRegistrations: RegistrationRecord[] = [];

function loadStorage(): RegistrationRecord[] {
  try {
    if (fs.existsSync(DB_FILE_PATH)) {
      const data = fs.readFileSync(DB_FILE_PATH, 'utf-8');
      inMemoryRegistrations = JSON.parse(data);
      return inMemoryRegistrations;
    }
  } catch (error) {
    console.error('Error reading registration storage file:', error);
  }
  return inMemoryRegistrations;
}

function persistStorage(): void {
  try {
    const dir = path.dirname(DB_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(inMemoryRegistrations, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error persisting registration storage file:', error);
  }
}

// Initial load
loadStorage();

function isTodayRecord(dateStr?: string, createdAtStr?: string): boolean {
  const checkStr = (str?: string): boolean => {
    if (!str) return false;
    try {
      const d = new Date(str);
      if (!isNaN(d.getTime())) {
        const today = new Date();
        return (
          d.getFullYear() === today.getFullYear() &&
          d.getMonth() === today.getMonth() &&
          d.getDate() === today.getDate()
        );
      }
    } catch (e) {}

    const now = new Date();
    const todayISO = now.toISOString().slice(0, 10);
    const monthShort = now.toLocaleString('en-US', { month: 'short' });
    const dayNum = now.getDate();

    const s = String(str);
    return s.includes(todayISO) || (s.includes(monthShort) && s.includes(String(dayNum)));
  };

  return checkStr(dateStr) || checkStr(createdAtStr);
}

export const db = {
  getAll(): RegistrationRecord[] {
    return loadStorage();
  },

  findByEmail(email: string): RegistrationRecord | undefined {
    const records = loadStorage();
    return records.find((r) => r.email.toLowerCase().trim() === email.toLowerCase().trim() && r.status === 'SUCCESS');
  },

  findByPaymentId(paymentId: string): RegistrationRecord | undefined {
    const records = loadStorage();
    return records.find((r) => r.paymentId === paymentId);
  },

  findByOrderId(orderId: string): RegistrationRecord | undefined {
    const records = loadStorage();
    return records.find((r) => r.orderId === orderId);
  },

  save(record: RegistrationRecord): RegistrationRecord {
    const records = loadStorage();
    const existingIndex = records.findIndex(
      (r) => r.registrationId === record.registrationId || (record.orderId && r.orderId === record.orderId)
    );
    if (existingIndex >= 0) {
      records[existingIndex] = record;
    } else {
      records.unshift(record);
    }
    inMemoryRegistrations = records;
    persistStorage();

    return record;
  },

  async syncToGoogleSheets(record: RegistrationRecord): Promise<boolean> {
    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      'https://script.google.com/macros/s/AKfycbxGJAt_gcu3aYtzYOM8LYyFQgdZLJoMS7B__BJ9FSdL2rqaE_My3L6WIAeV4wkXwsc6yQ/exec';

    try {
      const payload = {
        'Registration ID': record.registrationId,
        'Date': record.date,
        'Time': record.time,
        'Name': record.name,
        'Email': record.email,
        'Phone': record.phone,
        'City': record.city,
        'Profession': record.profession,
        'Problem to Solve': record.problemToSolve || '',
        'Course': record.course,
        'Payment ID': record.paymentId,
        'Order ID': record.orderId,
        'Signature': record.signature,
        'Amount': record.amount,
        'Status': record.status,
      };

      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        console.log(`✅ Successfully synced registration ${record.registrationId} to Google Sheets`);
        return true;
      }
    } catch (err: any) {
      console.error('⚠️ Failed to sync to Google Sheets webhook:', err.message);
    }
    return false;
  },

  async fetchFromGoogleSheets(): Promise<RegistrationRecord[]> {
    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      'https://script.google.com/macros/s/AKfycbxGJAt_gcu3aYtzYOM8LYyFQgdZLJoMS7B__BJ9FSdL2rqaE_My3L6WIAeV4wkXwsc6yQ/exec';

    try {
      const res = await fetch(webhookUrl, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        cache: 'no-store',
      });

      if (res.ok) {
        const data = await res.json();
        if (data && data.registrations && Array.isArray(data.registrations)) {
          return data.registrations;
        }
      }
    } catch (err: any) {
      console.error('Notice fetching from Google Sheets:', err.message);
    }
    return [];
  },

  calculateAnalytics(records: RegistrationRecord[]) {
    const successful = records.filter((r) => r.status === 'SUCCESS');
    const totalRevenue = successful.reduce((sum, r) => sum + (Number(r.amount) || 3), 0);

    const todayRecords = successful.filter((r) => isTodayRecord(r.date, r.createdAt));
    const todaySales = todayRecords.length;
    const todayRevenue = todayRecords.reduce((sum, r) => sum + (Number(r.amount) || 3), 0);

    const pendingCount = records.filter((r) => r.status === 'PENDING').length;

    return {
      totalStudents: successful.length,
      totalRevenue,
      todaySales,
      todayRevenue,
      pendingCount,
    };
  },
};
