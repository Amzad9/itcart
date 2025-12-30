import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import Navigation from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import '@/index.css';
import './globals.css';

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://weblibron.com');

export const metadata: Metadata = {
  metadataBase,
  title: 'weblibron - Digital Solutions & AI-Driven Innovation | Transform Your Business',
  description: 'A la carte digital solutions designed to transform your business. Cutting-edge technology, AI-driven innovation, and futuristic UI/UX design for maximum conversions.',
  keywords: 'digital solutions, AI-driven, web development, mobile apps, business transformation, IT services, technology consulting',
  authors: [{ name: 'weblibron' }],
  creator: 'weblibron',
  publisher: 'weblibron',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://weblibron.com',
    title: 'weblibron - Digital Solutions & AI-Driven Innovation',
    description: 'Transform your business with cutting-edge digital solutions and AI-driven innovation.',
    siteName: 'weblibron',
    images: [
      {
        url: '/logo512.png',
        width: 1200,
        height: 630,
        alt: 'weblibron',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'weblibron - Digital Solutions & AI-Driven Innovation',
    description: 'Transform your business with cutting-edge digital solutions and AI-driven innovation.',
    images: ['/logo512.png'],
  },
  alternates: {
    canonical: 'https://weblibron.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FF2951',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'weblibron',
  url: 'https://weblibron.com',
  logo: 'https://weblibron.com/logo512.png',
  description: 'Digital solutions and AI-driven innovation for business transformation',
  sameAs: [
    'https://www.facebook.com/weblibron',
    'https://www.linkedin.com/company/weblibron',
    'https://twitter.com/weblibron',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: ['English'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

