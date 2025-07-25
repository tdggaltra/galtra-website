import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Poppins } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
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
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body 
        className={`
          ${inter.className} 
          antialiased 
          bg-white 
          dark:bg-dark-900 
          text-dark-900 
          dark:text-white
          theme-transition
          min-h-screen
        `}
      >
        <ThemeProvider>
          {/* Background effects que se adaptam ao tema */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Light mode background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 dark:opacity-0 transition-opacity duration-500"></div>
            
            {/* Dark mode background */}
            <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
              <div className="absolute top-1/4 left-1/4 w-96 h-96 dark-orb-primary rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 dark-orb-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute inset-0 bg-hero-pattern"></div>
            </div>
          </div>

          <div className="relative z-10">
            <Header />
            <main className="relative">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
