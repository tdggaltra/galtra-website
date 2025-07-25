import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Poppins } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Galtra - Ciência de Dados e Inteligência Artificial',
    template: '%s | Galtra'
  },
  description: 'Transformamos seus dados em insights valiosos usando as tecnologias mais avançadas em Machine Learning e Inteligência Artificial. Soluções personalizadas para o seu negócio.',
  keywords: [
    'ciência de dados',
    'inteligência artificial',
    'machine learning',
    'analytics',
    'big data',
    'data science',
    'AI',
    'ML',
    'deep learning',
    'business intelligence',
    'consultoria em dados',
    'análise preditiva'
  ],
  authors: [{ name: 'Galtra Team' }],
  creator: 'Galtra',
  publisher: 'Galtra',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://galtra.com.br'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-BR',
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://galtra.com.br',
    title: 'Galtra - Ciência de Dados e IA',
    description: 'Transformamos dados em insights valiosos para seu negócio com IA avançada',
    siteName: 'Galtra',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Galtra - Ciência de Dados e IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galtra - Ciência de Dados e IA',
    description: 'Transformamos dados em insights valiosos para seu negócio',
    images: ['/images/og-image.jpg'],
    creator: '@galtra',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="pt-BR" 
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable} ${poppins.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-dark-900 text-dark-900 dark:text-white`}>
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
