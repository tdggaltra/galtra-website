import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/sections/ServiceDetail';

export const metadata: Metadata = {
  title: 'Inteligência Artificial - Galtra',
  description: 'Desenvolvemos soluções de IA personalizadas que automatizam processos, otimizam operações e criam experiências inovadoras.',
};

export default function AIPage() {
  const serviceData = {
    title: 'Inteligência Artificial',
    subtitle: 'IA que resolve problemas reais',
    description: 'Criamos soluções de IA customizadas que automatizam tarefas complexas, otimizam processos empresariais e geram insights inteligentes para impulsionar seu negócio.',
    features: [
      'Machine Learning Personalizado',
      'Automação Inteligente',
      'Sistemas de Recomendação',
      'Chatbots e Assistentes Virtuais',
      'Análise Preditiva',
      'Processamento de Linguagem Natural'
    ],
    benefits: [
      'Automação de processos manuais',
      'Previsões precisas de demanda',
      'Atendimento 24/7 automatizado',
      'Personalização em escala',
      'Redução de erros humanos',
      'Insights em tempo real'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Hugging Face', 'MLflow', 'Docker', 'Kubernetes'],
    cases: ['ChatGal IA', 'Sistema Jurídico CALC', 'Predição Soja Embrapa'],
    process: [
      'Definição do problema de IA',
      'Coleta e preparação de dados',
      'Desenvolvimento de modelos',
      'Treinamento e validação',
      'Deploy e monitoramento'
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
