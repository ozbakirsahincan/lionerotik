import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lion Erotik - Premium Erotik Ürünler',
  description: 'Antalya\'nın en güvenilir erotik ürün mağazası. Aynı gün kargo, gizli paketleme ve kapıda ödeme seçenekleri ile premium ürünler.',
  keywords: 'erotik ürünler, vibratör, dildo, anal oyuncak, fantezi ürünleri, antalya',
  openGraph: {
    title: 'Lion Erotik - Premium Erotik Ürünler',
    description: 'Antalya\'nın en güvenilir erotik ürün mağazası',
    url: 'https://lionerotik.com',
    siteName: 'Lion Erotik',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lion Erotik',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 