import { Metadata } from 'next';
import Projects from '@/components/sections/Projects';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nossos Projetos - Galtra',
  description: 'Cases de sucesso em Data Science e IA. Projetos reais que transformaram negócios e geraram resultados mensuráveis.',
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Projects />
      </main>
      
    </>
  );
}
