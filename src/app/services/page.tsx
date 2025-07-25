import { Metadata } from 'next';
import Services from '@/components/sections/Services';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nossos Serviços - Galtra',
  description: 'Soluções completas em Ciência de Dados, IA, Machine Learning e Analytics. Transformamos seus dados em insights valiosos.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Services />
      </main>
      
    </>
  );
}
