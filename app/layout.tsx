import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Business System Design Masterclass | Learn with Veeje',
  description:
    'Master Business System Design, Google Sheets Database Architecture & Web App Automation with AI. 2-Day Live Workshop on September 1 & 2, 2026 (2:30 Hrs Daily). Special Price ₹111.',
  keywords: [
    'AI Business System Design',
    'Learn with Veeje',
    'Google Sheets Database',
    'Web App Automation',
    'Business Dashboards',
    'No Code Systems',
    'Veeje Masterclass',
  ],
  authors: [{ name: 'Veeje', url: 'https://wa.me/916282548226' }],
  openGraph: {
    title: 'AI Business System Design Masterclass | Learn with Veeje',
    description:
      'Convert business ideas into complete web apps & Google Sheets databases without traditional programming. 2-Day Live Workshop on September 1 & 2, 2026 (2:30 Hrs Daily).',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Learn with Veeje',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'AI Business System Design Masterclass',
    description:
      'Learn how to convert business ideas into complete business systems using AI, Google Sheets and Web Apps without traditional programming. 2-Day Live Workshop (2:30 Hrs Daily).',
    provider: {
      '@type': 'Organization',
      name: 'Learn with Veeje',
      sameAs: 'https://wa.me/916282548226',
    },
    startDate: '2026-09-01',
    offers: {
      '@type': 'Offer',
      price: '111',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-100 antialiased selection:bg-blue-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
