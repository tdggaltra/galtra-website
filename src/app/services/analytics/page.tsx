import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/sections/ServiceDetail';

export const metadata: Metadata = {
  title: 'Analytics Avançado - Galtra',
  description: 'Dashboards interativos, Business Intelligence e análises avançadas para monitoramento em tempo real dos seus KPIs.',
};

export default function AnalyticsPage() {
  const serviceData = {
    title: 'Analytics Avançado',
    subtitle: 'Insights em tempo real para decisões inteligentes',
    description: 'Criamos dashboards interativos e sistemas de BI que transformam dados complexos em visualizações claras e insights acionáveis para sua equipe.',
    features: [
      'Dashboards Interativos',
      'Business Intelligence',
      'Relatórios Automatizados',
      'KPIs em Tempo Real',
      'Análise de Performance',
      'Data Storytelling'
    ],
    benefits: [
      'Visibilidade completa do negócio',
      'Decisões baseadas em dados',
      'Monitoramento contínuo',
      'Identificação rápida de tendências',
      'Relatórios automatizados',
      'ROI mensurável'
    ],
    technologies: ['Tableau', 'Power BI', 'Looker', 'Streamlit', 'Plotly', 'D3.js', 'Grafana', 'Elasticsearch'],
    cases: ['Dashboard iCeasa', 'CRM Analytics LESCO', 'Monitoramento IDR-Paraná'],
    process: [
      'Mapeamento de KPIs',
      'Integração de fontes de dados',
      'Design de dashboards',
      'Implementação e testes',
      'Treinamento da equipe'
    ]
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <ServiceDetail {...serviceData} />
      </main>
      <Footer />
    </>
  );
}
