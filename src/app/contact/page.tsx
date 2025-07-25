import { Metadata } from 'next';
import Contact from '@/components/sections/Contact';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Contato - Galtra',
  description: 'Entre em contato conosco para transformar seus dados em resultados. Fale com nossos especialistas em Data Science e IA.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
