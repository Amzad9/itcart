import type { Metadata } from 'next';
import ServiceApp from '@/components/OurService/ServiceApp';
import { Smartphone, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'App Development Services - Mobile & Web Apps | Devora',
  description: 'Build powerful mobile and web applications with our expert app development services. iOS, Android, and cross-platform solutions designed to engage users and drive business growth.',
  keywords: [
    'App Development',
    'Mobile App Development',
    'iOS Development',
    'Android Development',
    'Cross-Platform Apps',
    'React Native',
    'Flutter Development',
    'Mobile Applications',
    'Web Applications',
    'Devora',
  ],
  openGraph: {
    title: 'App Development Services - Mobile & Web Apps | Devora',
    description: 'Build powerful mobile and web applications with our expert app development services.',
    type: 'website',
    url: '/app-development',
    images: [
      {
        url: '/logo512.png',
        width: 1200,
        height: 630,
        alt: 'App Development Services by Devora',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Development Services - Mobile & Web Apps',
    description: 'Build powerful mobile and web applications with our expert app development services.',
    images: ['/logo512.png'],
  },
  alternates: {
    canonical: '/app-development',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AppDevelopmentPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-[#25343F] via-[#1B3C53] to-[#25343F]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/20 blur-3xl animate-pulse"></div>
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-white/90 border border-white/20">
              <Smartphone className="w-4 h-4 text-[#6F8F72]" />
              Mobile & Web Applications
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-white to-[#6F8F72]">
                  App Development
                </span>
                <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#6F8F72]/50 via-white/50 to-[#6F8F72]/50 blur-sm"></div>
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
              Build powerful mobile and web applications with our expert app development services. iOS, Android, and cross-platform solutions designed to engage users and drive business growth.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-white via-[#F8FAFC] to-white">
        <ServiceApp />
      </div>
    </>
  );
}
