import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CaseStudy from '@/components/sections/CaseStudy';

export const metadata: Metadata = {
  title: 'Case iCeasa - Analytics de Vendas - Galtra',
  description: 'Como desenvolvemos uma plataforma completa de analytics para o setor hortifrutigranjeiro, gerando insights valiosos sobre vendas e demanda.',
};

export default function ICeasaVendasCase() {
  const caseData = {
    title: 'iCeasa - Analytics de Vendas',
    client: 'Setor Hortifrutigranjeiro',
    sector: 'Agronegócio',
    duration: '6 meses',
    team: '4 especialistas',
    challenge: 'O setor hortifrutigranjeiro precisava de uma solução para analisar padrões de vendas, comportamento de clientes e sazonalidade de produtos perecíveis.',
    solution: 'Desenvolvemos uma plataforma completa de Business Intelligence com análises avançadas de vendas, segmentação RFM de clientes e dashboards interativos.',
    results: [
      'R$ 5,2M em receita total analisada',
      '+37.94% crescimento ano anterior',
      '52 empresas beneficiadas',
      '36.600 produtos catalogados'
    ],
    technologies: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Machine Learning', 'SQL'],
    features: [
      'Dashboard de vendas em tempo real',
      'Análise de sazonalidade',
      'Segmentação RFM de clientes',
      'Análise geográfica',
      'Previsão de demanda',
      'Relatórios automatizados'
    ]
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <CaseStudy {...caseData} />
      </main>
      
    </>
  );
}
