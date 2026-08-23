import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Business System Design Masterclass | Learn with Veeje',
  description:
    'Design • Build • Automate • Deploy. Learn how to convert business ideas into complete business systems using AI, Google Sheets and Web Apps without traditional programming. Live 2 Hours 30 Minutes Workshop for ₹249.',
  keywords: [
    'AI Business System Design',
    'Learn with Veeje',
    'Google Sheets Database',
    'Business Web Apps',
    'Apps Script Automation',
    'No Code Systems',
    'Business Process Analysis',
    'Veeje Masterclass',
  ],
  authors: [{ name: 'Veeje' }],
  openGraph: {
    title: 'AI Business System Design Masterclass - Learn with Veeje',
    description:
      'Design • Build • Automate • Deploy. Learn how to design complete business systems, build databases in Google Sheets, connect them to web applications and use AI to automate development. Live Workshop for ₹249.',
    url: 'https://learnwithveeje.com',
    siteName: 'Learn with Veeje',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Business System Design Masterclass | Learn with Veeje',
    description:
      'Design • Build • Automate • Deploy. Learn how to convert business ideas into complete business systems. Live Workshop for ₹249.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdCourse = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'AI Business System Design Masterclass',
    description:
      'Learn how to convert business ideas into complete business systems using AI, Google Sheets and Web Apps without traditional programming.',
    provider: {
      '@type': 'Organization',
      name: 'Learn with Veeje',
      sameAs: 'https://learnwithveeje.com',
    },
    offers: {
      '@type': 'Offer',
      price: '249',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://learnwithveeje.com',
    },
    educationalLevel: 'Beginner',
  };

  return (
    <html lang="en" className={`${jakarta.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourse) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
