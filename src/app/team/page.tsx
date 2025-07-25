import { Metadata } from 'next';
import Team from '@/components/sections/Team';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nossa Equipe - Galtra',
  description: 'Conheça os especialistas em Data Science e IA que transformam dados em soluções inteligentes e resultados excepcionais.',
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Team />
      </main>
      
    </>
  );
}
