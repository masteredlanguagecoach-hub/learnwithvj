import nodemailer from 'nodemailer';

export interface SendEmailOptions {
  toEmail: string;
  studentName: string;
  courseName: string;
  amountPaid: number;
  paymentId: string;
  registrationId: string;
}

export async function sendConfirmationEmail(options: SendEmailOptions) {
  const { toEmail, studentName, courseName, amountPaid, paymentId, registrationId } = options;

  const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_LINK || 'https://chat.whatsapp.com/EXAMPLE_VEEJE_AI_BI_GROUP';
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Registration Confirmed - Learn with Veeje</title>
    <style>
      body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
      .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
      .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0284c7 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
      .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
      .header p { margin: 8px 0 0 0; color: #93c5fd; font-size: 14px; }
      .content { padding: 32px 24px; }
      .greeting { font-size: 18px; font-weight: 600; margin-bottom: 16px; color: #0f172a; }
      .badge { display: inline-block; background: #dcfce7; color: #166534; padding: 6px 14px; border-radius: 20px; font-weight: 600; font-size: 13px; margin-bottom: 24px; }
      .details-card { background: #f1f5f9; border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid #e2e8f0; }
      .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px border-style: dashed; border-color: #cbd5e1; }
      .detail-row:last-child { border-bottom: none; }
      .detail-label { color: #64748b; font-size: 14px; font-weight: 500; }
      .detail-value { color: #0f172a; font-size: 14px; font-weight: 700; text-align: right; }
      .cta-box { text-align: center; background: #eff6ff; border: 1px solid #bfdbfe; padding: 24px; border-radius: 12px; margin-bottom: 24px; }
      .cta-button { display: inline-block; background: #2563eb; color: #ffffff !important; font-weight: 700; text-decoration: none; padding: 14px 28px; border-radius: 10px; font-size: 16px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3); }
      .footer { background: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Learn with Veeje</h1>
        <p>AI Business Intelligence Masterclass</p>
      </div>
      <div class="content">
        <div class="greeting">Hi ${studentName}, 🎉</div>
        <div class="badge">✓ Registration Confirmed</div>
        
        <p style="line-height: 1.6; color: #334155;">
          Congratulations! Your seat for the <strong>AI Business Intelligence Masterclass</strong> has been successfully locked. We are excited to help you transform raw data into powerful dashboards & AI automations.
        </p>

        <div class="details-card">
          <div class="detail-row">
            <span class="detail-label">Registration ID</span>
            <span class="detail-value">${registrationId}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Course</span>
            <span class="detail-value">${courseName}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Amount Paid</span>
            <span class="detail-value">₹${amountPaid}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Payment ID</span>
            <span class="detail-value">${paymentId}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Duration</span>
            <span class="detail-value">2 Hours (Live Online)</span>
          </div>
        </div>

        <div class="cta-box">
          <h3 style="margin-top: 0; color: #1e3a8a; font-size: 16px;">🔥 Important Next Step</h3>
          <p style="font-size: 14px; color: #3b82f6; margin-bottom: 20px;">
            Please join our exclusive student WhatsApp group immediately. All Google Meet workshop links, templates, and bonus resources will be shared there.
          </p>
          <a href="${whatsappLink}" target="_blank" class="cta-button">
            👉 Join WhatsApp Group Now
          </a>
        </div>

        <p style="font-size: 13px; color: #64748b; line-height: 1.5;">
          If you have any questions or need assistance, feel free to contact Veeje directly at <strong>6282548226</strong> or reply to this email.
        </p>
      </div>
      <div class="footer">
        © ${new Date().getFullYear()} Learn with Veeje. All rights reserved. <br/>
        Analyze. Visualize. Automate.
      </div>
    </div>
  </body>
  </html>
  `;

  // Log email notice
  console.log(`✉️ Preparing confirmation email to: ${toEmail} for ${registrationId}`);

  if (!gmailUser || !gmailPass || gmailUser === 'veeje.masterclass@gmail.com') {
    console.log(`ℹ️ Nodemailer: Gmail credentials not fully configured in environment. Logging email dispatch simulation cleanly for ${toEmail}.`);
    return { success: true, simulated: true };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"Learn with Veeje" <${gmailUser}>`,
      to: toEmail,
      subject: `Registration Confirmed - ${courseName}`,
      html: htmlContent,
    });

    console.log(`✅ Confirmation email sent successfully to ${toEmail}`);
    return { success: true, simulated: false };
  } catch (error: any) {
    console.error('⚠️ Nodemailer dispatch error:', error.message);
    return { success: false, error: error.message };
  }
}
