import type { Metadata } from 'next';
import Mis from '@/components/CartSolution/Mis';
import { BarChart3, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'MIS - Management Information System | Devora',
  description: 'Empower your organization with our comprehensive Management Information System. Manage digital transformation, documents, data, IT assets, KYC, and more with Devora\'s MIS solution.',
  keywords: [
    'MIS',
    'Management Information System',
    'Data Management',
    'Document Management System',
    'IT Asset Management',
    'KYC Management',
    'Business Intelligence',
    'Data Analytics',
    'Digital Transformation',
    'Devora',
  ],
  openGraph: {
    title: 'MIS - Management Information System | Devora',
    description: 'Empower your organization with our comprehensive Management Information System.',
    type: 'website',
    url: '/mis',
    images: [
      {
        url: '/logo512.png',
        width: 1200,
        height: 630,
        alt: 'MIS Solution by Devora',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIS - Management Information System',
    description: 'Empower your organization with our comprehensive MIS solution.',
    images: ['/logo512.png'],
  },
  alternates: {
    canonical: '/mis',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MisPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-[#25343F] via-[#1B3C53] to-[#25343F]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/20 blur-3xl animate-pulse"></div>
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-white/90 border border-white/20">
              <BarChart3 className="w-4 h-4 text-[#6F8F72]" />
              Management Information System
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-white to-[#6F8F72]">
                  MIS
                </span>
                <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#6F8F72]/50 via-white/50 to-[#6F8F72]/50 blur-sm"></div>
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
              Empower your organization with our comprehensive Management Information System. Manage digital transformation, documents, data, IT assets, and more all in one place.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-white via-[#F8FAFC] to-white">
        <Mis />
      </div>
    </>
  );
}
