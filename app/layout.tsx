import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Business Intelligence Masterclass | Learn with Veeje',
  description:
    'Master Advanced Google Sheets, Business Dashboards & AI Automation. Learn how to analyze business data, build executive dashboards, and automate workflows with AI. Live 2-Hour Online Workshop for ₹249.',
  keywords: [
    'Google Sheets Masterclass',
    'AI Business Intelligence',
    'Veeje Google Sheets',
    'Business Dashboards',
    'Apps Script Automation',
    'ChatGPT Google Sheets',
    'Data Analytics Workshop',
    'Learn with Veeje',
  ],
  authors: [{ name: 'Veeje' }],
  openGraph: {
    title: 'AI Business Intelligence Masterclass - Learn with Veeje',
    description:
      'Analyze. Visualize. Automate. Master Advanced Google Sheets, Business Dashboards & AI Automation in a live 2-Hour Workshop for ₹249.',
    url: 'https://learnwithveeje.com',
    siteName: 'Learn with Veeje',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Business Intelligence Masterclass | Learn with Veeje',
    description:
      'Master Advanced Google Sheets, Business Dashboards & AI Automation. Live 2-Hour Workshop for ₹249.',
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
    name: 'AI Business Intelligence Masterclass',
    description:
      'Learn how to analyze business data, build professional dashboards, automate repetitive work and use AI with Google Sheets to improve business decision making.',
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
