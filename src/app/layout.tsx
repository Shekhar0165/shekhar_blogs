import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ShekharKashyap.com — Backend & DevOps Blog',
    template: '%s | ShekharKashyap.com',
  },
  description:
    'Backend & DevOps insights, tutorials, and guides by Shekhar Kashyap. Docker, AWS, Node.js, System Design, CI/CD and more.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://shekharkashyap.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ShekharKashyap.com',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@shekhar00165',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'yBRhtPARTWL16nHEZtXVrGoBtkSgiBlO8IO13vdkdok',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col transition-theme">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
