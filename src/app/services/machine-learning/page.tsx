import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/sections/ServiceDetail';

export const metadata: Metadata = {
  title: 'Machine Learning - Galtra',
  description: 'Modelos de ML customizados para previsão, classificação e otimização. Algoritmos avançados que aprendem com seus dados.',
};

export default function MachineLearningPage() {
  const serviceData = {
    title: 'Machine Learning',
    subtitle: 'Algoritmos que aprendem e evoluem',
    description: 'Desenvolvemos modelos de Machine Learning sob medida para suas necessidades, desde previsão de demanda até classificação automatizada e sistemas de recomendação.',
    features: [
      'Modelos Preditivos',
      'Classificação Automatizada',
      'Análise de Clustering',
      'Detecção de Anomalias',
      'Sistemas de Recomendação',
      'Otimização Algorítmica'
    ],
    benefits: [
      'Previsões precisas de tendências',
      'Automação de classificações',
      'Detecção precoce de problemas',
      'Personalização de experiências',
      'Otimização de recursos',
      'Melhoria contínua dos resultados'
    ],
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Random Forest', 'SVM', 'Neural Networks', 'Ensemble Methods'],
    cases: ['Predição Carbono Soja', 'Análise RFM Clientes', 'Detecção Pessoas Vídeo'],
    process: [
      'Análise do problema de ML',
      'Engenharia de features',
      'Seleção de algoritmos',
      'Treinamento e validação',
      'Otimização e deploy'
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
