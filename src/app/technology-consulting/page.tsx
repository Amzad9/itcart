import type { Metadata } from 'next';
import Technology from '@/components/OurService/Technology';
import { Lightbulb, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology Consulting Services - Strategic IT Solutions | Devora',
  description: 'Get expert technology consulting services to transform your business. Strategic IT planning, digital transformation, cloud solutions, and technology roadmaps tailored to your business goals.',
  keywords: [
    'Technology Consulting',
    'IT Consulting',
    'Digital Transformation',
    'Strategic IT Planning',
    'Cloud Consulting',
    'Technology Roadmap',
    'IT Strategy',
    'Digital Strategy',
    'Technology Advisory',
    'Devora',
  ],
  openGraph: {
    title: 'Technology Consulting Services - Strategic IT Solutions | Devora',
    description: 'Get expert technology consulting services to transform your business.',
    type: 'website',
    url: '/technology-consulting',
    images: [
      {
        url: '/logo512.png',
        width: 1200,
        height: 630,
        alt: 'Technology Consulting Services by Devora',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Consulting Services - Strategic IT Solutions',
    description: 'Get expert technology consulting services to transform your business.',
    images: ['/logo512.png'],
  },
  alternates: {
    canonical: '/technology-consulting',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TechnologyConsultingPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-[#25343F] via-[#1B3C53] to-[#25343F]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/20 blur-3xl animate-pulse"></div>
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-white/90 border border-white/20">
              <Lightbulb className="w-4 h-4 text-[#6F8F72]" />
              Strategic IT Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-white to-[#6F8F72]">
                  Technology Consulting
                </span>
                <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#6F8F72]/50 via-white/50 to-[#6F8F72]/50 blur-sm"></div>
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
              Get expert technology consulting services to transform your business. Strategic IT planning, digital transformation, cloud solutions, and technology roadmaps tailored to your business goals.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-white via-[#F8FAFC] to-white">
        <Technology />
      </div>
    </>
  );
}
