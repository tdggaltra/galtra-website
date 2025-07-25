import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/sections/ServiceDetail';

export const metadata: Metadata = {
  title: 'Ciência de Dados - Galtra',
  description: 'Transformamos dados brutos em insights valiosos através de análises avançadas, modelagem estatística e visualizações interativas.',
};

export default function DataSciencePage() {
  const serviceData = {
    title: 'Ciência de Dados',
    subtitle: 'Transforme dados em insights estratégicos',
    description: 'Nossa equipe especializada extrai valor dos seus dados através de técnicas estatísticas avançadas, análise exploratória e visualizações que orientam decisões de negócio inteligentes.',
    features: [
      'Análise Exploratória de Dados',
      'Modelagem Estatística Avançada',
      'Dashboards Interativos',
      'Relatórios Automatizados',
      'KPIs e Métricas Personalizadas',
      'Data Mining e Descoberta de Padrões'
    ],
    benefits: [
      'Decisões baseadas em evidências',
      'Identificação de oportunidades ocultas',
      'Otimização de processos',
      'Redução de custos operacionais',
      'Melhoria na eficiência',
      'Vantagem competitiva'
    ],
    technologies: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Apache Spark', 'Pandas', 'NumPy'],
    cases: ['iCeasa Analytics', 'Dashboard Agrometeorológico', 'CRM Moveleiro'],
    process: [
      'Coleta e preparação dos dados',
      'Análise exploratória',
      'Modelagem estatística',
      'Validação dos resultados',
      'Implementação e monitoramento'
    ]
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <ServiceDetail {...serviceData} />
      </main>
      
    </>
  );
}
