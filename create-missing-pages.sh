#!/bin/bash

# Script para criar todas as páginas faltantes do Next.js 14 (App Router)
# Execute: chmod +x create-missing-pages.sh && ./create-missing-pages.sh

echo "🔧 Criando páginas faltantes para o site Galtra..."

# Criar diretórios das páginas
mkdir -p src/app/{about,services/{data-science,artificial-intelligence,machine-learning,analytics},projects,team,blog,contact}

echo "📄 Criando página About..."
cat > src/app/about/page.tsx << 'EOF'
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
      <Footer />
    </>
  );
}
EOF

echo "📄 Criando página Services..."
cat > src/app/services/page.tsx << 'EOF'
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
      <Footer />
    </>
  );
}
EOF

echo "📄 Criando página Data Science..."
cat > src/app/services/data-science/page.tsx << 'EOF'
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
      <Footer />
    </>
  );
}
EOF

echo "📄 Criando página IA..."
cat > src/app/services/artificial-intelligence/page.tsx << 'EOF'
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
      <Footer />
    </>
  );
}
EOF

echo "📄 Criando página Machine Learning..."
cat > src/app/services/machine-learning/page.tsx << 'EOF'
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
      <Footer />
    </>
  );
}
EOF

echo "📄 Criando página Analytics..."
cat > src/app/services/analytics/page.tsx << 'EOF'
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
EOF

echo "📄 Criando página Projects..."
cat > src/app/projects/page.tsx << 'EOF'
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
      <Footer />
    </>
  );
}
EOF

echo "📄 Criando página Team..."
cat > src/app/team/page.tsx << 'EOF'
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
      <Footer />
    </>
  );
}
EOF

echo "📄 Criando página Blog..."
cat > src/app/blog/page.tsx << 'EOF'
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
      <Footer />
    </>
  );
}
EOF

echo "📄 Criando página Contact..."
cat > src/app/contact/page.tsx << 'EOF'
import { Metadata } from 'next';
import Contact from '@/components/sections/Contact';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Contato - Galtra',
  description: 'Entre em contato conosco para transformar seus dados em resultados. Fale com nossos especialistas em Data Science e IA.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
EOF

echo "📄 Criando manifest.json..."
cat > public/manifest.json << 'EOF'
{
  "name": "Galtra - Data Science and Analytics",
  "short_name": "Galtra",
  "description": "Soluções inovadoras em Data Science e IA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#0ea5e9",
  "icons": [
    {
      "src": "/favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "/images/galtra-logo.png",
      "type": "image/png",
      "sizes": "192x192",
      "purpose": "maskable"
    },
    {
      "src": "/images/galtra-logo.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
EOF

echo "📄 Criando componente ServiceDetail..."
mkdir -p src/components/sections
cat > src/components/sections/ServiceDetail.tsx << 'EOF'
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Users, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  cases: string[];
  process: string[];
}

export default function ServiceDetail({
  title,
  subtitle,
  description,
  features,
  benefits,
  technologies,
  cases,
  process
}: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 dark:from-dark-900 dark:to-dark-800/50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-50/80 dark:bg-primary-900/30 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 rounded-full px-4 py-2 text-primary-700 dark:text-primary-300 font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Serviço Especializado</span>
            </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="glass-effect rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <BookOpen className="w-16 h-16 mx-auto text-primary-600 mb-6" />
              <h3 className="text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-4">
                Quer receber nossos insights?
              </h3>
              <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
                Assine nossa newsletter e receba artigos exclusivos sobre Data Science, 
                IA e as últimas tendências tecnológicas.
              </p>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 max-w-xs mx-auto"
              >
                <span>Assinar Newsletter</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
EOF

echo "📄 Criando favicon básico..."
# Criar um favicon simples (será substituído pela logo real)
cat > public/favicon.ico << 'EOF'
# Placeholder para favicon - substitua pela versão real da logo Galtra
EOF

echo "📄 Criando páginas de cases individuais..."
mkdir -p src/app/cases/{iceasa-vendas,iceasa-estoque,calc-juridico,agro-climatico,lesco-crm,chatgal,visao-computacional,predicao-soja}

# Criar uma página de case exemplo
cat > src/app/cases/iceasa-vendas/page.tsx << 'EOF'
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
      <Footer />
    </>
  );
}
EOF

echo "📄 Criando componente CaseStudy..."
cat > src/components/sections/CaseStudy.tsx << 'EOF'
'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Users, Clock, Target, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface CaseStudyProps {
  title: string;
  client: string;
  sector: string;
  duration: string;
  team: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  features: string[];
}

export default function CaseStudy({
  title,
  client,
  sector,
  duration,
  team,
  challenge,
  solution,
  results,
  technologies,
  features
}: CaseStudyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 dark:from-dark-900 dark:to-dark-800/50">
      {/* Back Button */}
      <section className="pt-8 pb-0">
        <div className="container">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Voltar aos Projetos
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{title}</span>
            </h1>
            
            <p className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-8">
              Case de Sucesso • {client}
            </p>

            {/* Project Info */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass-effect rounded-xl p-4">
                <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  {sector}
                </div>
                <div className="text-sm text-dark-500 dark:text-dark-400">
                  Setor
                </div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  {duration}
                </div>
                <div className="text-sm text-dark-500 dark:text-dark-400">
                  Duração
                </div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  {team}
                </div>
                <div className="text-sm text-dark-500 dark:text-dark-400">
                  Equipe
                </div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  Sucesso
                </div>
                <div className="text-sm text-dark-500 dark:text-dark-400">
                  Status
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center">
                  <Target className="w-6 h-6 text-red-500 mr-3" />
                  Desafio
                </h2>
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                  {challenge}
                </p>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  Solução
                </h2>
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                  {solution}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
              Resultados Alcançados
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6"
                >
                  <div className="text-2xl font-bold gradient-text mb-2">
                    {result.split(' ')[0]}
                  </div>
                  <div className="text-dark-600 dark:text-dark-300 text-sm">
                    {result.split(' ').slice(1).join(' ')}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies & Features */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                  Tecnologias Utilizadas
                </h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                  Funcionalidades Implementadas
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-dark-600 dark:text-dark-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glass-effect rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <Users className="w-16 h-16 mx-auto text-primary-600 mb-6" />
              <h3 className="text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-4">
                Quer resultados similares para seu negócio?
              </h3>
              <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
                Vamos conversar sobre como podemos criar uma solução personalizada 
                que gere impacto real para sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Solicitar Proposta
                </Link>
                <Link
                  href="/projects"
                  className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-800 text-dark-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-dark-200/50 dark:border-dark-700/50"
                >
                  Ver Outros Cases
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
EOF

echo "📄 Criando página 404 personalizada..."
cat > src/app/not-found.tsx << 'EOF'
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 dark:from-dark-900 dark:to-dark-800/50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
            Página não encontrada
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida para outro local.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Voltar ao Início</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-white dark:bg-dark-800 text-dark-900 dark:text-white px-6 py-3 rounded-lg font-semibold border border-dark-200 dark:border-dark-700 hover:bg-gray-50 dark:hover:bg-dark-700 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Página Anterior</span>
          </button>
        </div>
      </div>
    </div>
  );
}
EOF

echo "📄 Criando loading page..."
cat > src/app/loading.tsx << 'EOF'
export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 dark:from-dark-900 dark:to-dark-800/50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-dark-600 dark:text-dark-300">Carregando...</p>
      </div>
    </div>
  );
}
EOF

echo "✅ Todas as páginas foram criadas com sucesso!"
echo ""
echo "📋 Páginas criadas:"
echo "   ✅ /about - Página sobre a empresa"
echo "   ✅ /services - Página de serviços"
echo "   ✅ /services/data-science - Ciência de Dados"
echo "   ✅ /services/artificial-intelligence - IA"
echo "   ✅ /services/machine-learning - ML"
echo "   ✅ /services/analytics - Analytics"
echo "   ✅ /projects - Página de projetos"
echo "   ✅ /team - Página da equipe"
echo "   ✅ /blog - Página do blog"
echo "   ✅ /contact - Página de contato"
echo "   ✅ /cases/iceasa-vendas - Case de exemplo"
echo "   ✅ manifest.json - PWA manifest"
echo "   ✅ Página 404 personalizada"
echo "   ✅ Página de loading"
echo ""
echo "🔧 Componentes auxiliares criados:"
echo "   ✅ ServiceDetail - Para páginas de serviços"
echo "   ✅ BlogSection - Para o blog"
echo "   ✅ CaseStudy - Para cases individuais"
echo ""
echo "🚀 Agora todos os links do Header funcionarão corretamente!"
echo "Execute: npm run dev e teste a navegação.">
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{title}</span>
            </h1>
            
            <p className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-6">
              {subtitle}
            </p>
            
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center">
                  <Target className="w-6 h-6 text-primary-600 mr-3" />
                  Principais Funcionalidades
                </h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center text-dark-600 dark:text-dark-300"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 text-accent-600 mr-3" />
                  Benefícios para seu Negócio
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center text-dark-600 dark:text-dark-300"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6">
              Tecnologias Utilizadas
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glass-effect rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <Users className="w-16 h-16 mx-auto text-primary-600 mb-6" />
              <h3 className="text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-4">
                Pronto para implementar {title.toLowerCase()}?
              </h3>
              <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
                Vamos conversar sobre como podemos aplicar {title.toLowerCase()} 
                para resolver os desafios específicos do seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Solicitar Consulta</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/projects"
                  className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-800 text-dark-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-dark-200/50 dark:border-dark-700/50"
                >
                  Ver Cases de Sucesso
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
EOF

echo "📄 Criando componente BlogSection..."
cat > src/components/sections/BlogSection.tsx << 'EOF'
'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'O Futuro da Inteligência Artificial no Agronegócio',
    excerpt: 'Como a IA está revolucionando a agricultura brasileira com previsões mais precisas e otimização de recursos.',
    author: 'Tiago Galvão',
    date: '2024-01-15',
    category: 'Inteligência Artificial',
    readTime: '8 min',
    image: '/images/blog/ia-agronegocio.jpg'
  },
  {
    id: 2,
    title: 'Machine Learning para Previsão de Demanda: Guia Completo',
    excerpt: 'Técnicas avançadas de ML para prever demanda com precisão e otimizar estoques em diferentes setores.',
    author: 'Ana Silva',
    date: '2024-01-10',
    category: 'Machine Learning',
    readTime: '12 min',
    image: '/images/blog/ml-demanda.jpg'
  },
  {
    id: 3,
    title: 'Como Implementar Analytics em Tempo Real',
    excerpt: 'Estratégias práticas para criar dashboards que fornecem insights instantâneos para tomada de decisão.',
    author: 'Carlos Santos',
    date: '2024-01-05',
    category: 'Analytics',
    readTime: '6 min',
    image: '/images/blog/analytics-tempo-real.jpg'
  }
];

export default function BlogSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 dark:from-dark-900 dark:to-dark-800/50">
      <section className="section-padding">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-50/80 dark:bg-primary-900/30 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 rounded-full px-4 py-2 text-primary-700 dark:text-primary-300 font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Insights & Conhecimento</span>
            </h1>
            
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Artigos técnicos, tendências e insights sobre Data Science, IA e tecnologia 
              para manter você atualizado com o mercado.
            </p>
          </motion.div>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-primary-500 to-accent-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/60" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200 group"
                  >
                    <span>Ler artigo</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div