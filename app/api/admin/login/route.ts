import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const adminSecret = process.env.ADMIN_SECRET_KEY || 'admin123veeje';

    if (password === adminSecret) {
      const response = NextResponse.json({ success: true, token: adminSecret });
      // Set secure session cookie
      response.cookies.set('admin_token', adminSecret, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });
      return response;
    }

    return NextResponse.json({ error: 'INVALID_CREDENTIALS', message: 'Invalid Admin Password' }, { status: 401 });
  } catch (error: any) {
    return NextResponse.json({ error: 'SERVER_ERROR', message: error.message }, { status: 500 });
  }
}
