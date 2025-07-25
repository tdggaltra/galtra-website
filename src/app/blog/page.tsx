import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogSection from '@/components/sections/BlogSection';

export const metadata: Metadata = {
  title: 'Blog - Galtra',
  description: 'Insights sobre Data Science, IA e tecnologia. Artigos técnicos e tendências do mercado de dados.',
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <BlogSection />
      </main>
      
    </>
  );
}
