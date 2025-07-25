import { Metadata } from 'next';
import About from '@/components/sections/About';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Sobre Nós - Galtra',
  description: 'Conheça a Galtra, empresa especializada em Ciência de Dados e IA. Nossa missão, valores e equipe de especialistas.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
      </main>
      
    </>
  );
}
