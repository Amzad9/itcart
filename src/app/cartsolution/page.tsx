import type { Metadata } from 'next';
import CartSolution from '@/components/CartSolution/CartSolution';

export const metadata: Metadata = {
  title: 'Cart Solutions - HRMS, E-Services, MIS & Enterprise Solutions | Devora',
  description: 'Discover comprehensive digital solutions including HRMS, E-Services, MIS, and Enterprise Solutions. Streamline your business operations with Devora\'s cutting-edge technology and expert support.',
  keywords: [
    'HRMS',
    'Human Resource Management System',
    'E-Services',
    'MIS',
    'Management Information System',
    'Enterprise Solutions',
    'Business Solutions',
    'Digital Transformation',
    'Devora',
    'Business Automation',
  ],
  openGraph: {
    title: 'Cart Solutions - HRMS, E-Services, MIS & Enterprise Solutions',
    description: 'Streamline your business operations with Devora\'s comprehensive digital solutions including HRMS, E-Services, MIS, and Enterprise Solutions.',
    type: 'website',
    url: '/cartsolution',
    images: [
      {
        url: '/logo512.png',
        width: 1200,
        height: 630,
        alt: 'Devora Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cart Solutions - HRMS, E-Services, MIS & Enterprise Solutions',
    description: 'Streamline your business operations with Devora\'s comprehensive digital solutions.',
    images: ['/logo512.png'],
  },
  alternates: {
    canonical: '/cartsolution',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CartSolutionPage() {
  return <CartSolution />;
}
