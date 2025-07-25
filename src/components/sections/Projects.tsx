'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  BarChart3, 
  Brain, 
  TrendingUp,
  Zap,
  Filter,
  Eye,
  MessageSquare,
  FileText,
  Sprout,
  Home,
  Users
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Dados baseados nos cases reais da Galtra
const projects = [
  {
    id: 'iceasa-vendas',
    title: 'iCeasa - Analytics de Vendas',
    category: 'Analytics',
    sector: 'Hortifrutigranjeiro',
    description: 'Sistema avançado de análise de vendas e demanda para o setor hortifrutigranjeiro, processando dados de sazonalidade, elasticidade de preços e análise de clientes.',
    longDescription: 'Plataforma completa de Business Intelligence desenvolvida para o setor hortifrutigranjeiro, oferecendo análises detalhadas de vendas, comportamento de clientes e tendências de mercado.',
    image: '/images/projects/iceasa-dashboard.png',
    hasCustomImage: true,
    tech: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Machine Learning'],
    features: [
      'Análise de sazonalidade de vendas',
      'Elasticidade de preços em tempo real',
      'Segmentação RFM de clientes',
      'Dashboards interativos',
      'Análise geográfica de vendas',
      'Previsão de demanda'
    ],
    metrics: {
      revenue: 'R$ 5,2M',
      growth: '+37.94%',
      clients: '52 empresas',
      products: '36.600 produtos'
    },
    icon: BarChart3,
    color: 'from-orange-500 to-red-500',
    demoUrl: '#',
    caseStudyUrl: '/cases/iceasa-vendas',
    initials: 'IV',
    bgColor: 'from-orange-500 to-red-500'
  },
  {
    id: 'iceasa-estoque',
    title: 'iCeasa - Controle de Estoque',
    category: 'IA Preditiva',
    sector: 'Hortifrutigranjeiro',
    description: 'Sistema inteligente de controle de estoque com análise de movimentações, previsão de demanda e otimização de inventário para produtos perecíveis.',
    longDescription: 'Solução de controle de estoque especializada para produtos hortifrutigranjeiros, com algoritmos de previsão e otimização específicos para itens perecíveis.',
    image: '/images/projects/iceasa-estoque.png',
    hasCustomImage: true,
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Time Series', 'Plotly'],
    features: [
      'Controle de estoque em tempo real',
      'Análise de giro de produtos',
      'Previsão de demanda',
      'Alertas de ruptura',
      'Otimização de compras',
      'Relatórios de movimentação'
    ],
    metrics: {
      products: '10 categorias',
      turnover: '4.37x',
      waste: '-35%',
      accuracy: '75.8%'
    },
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    demoUrl: '#',
    caseStudyUrl: '/cases/iceasa-estoque',
    initials: 'IE',
    bgColor: 'from-green-500 to-emerald-500'
  },
  {
    id: 'calc-juridico',
    title: 'CALC - Sistema Jurídico IA',
    category: 'Processamento de Linguagem Natural',
    sector: 'Jurídico',
    description: 'Sistema inteligente de elaboração de petições jurídicas utilizando IA para automatizar a criação de documentos legais personalizados.',
    longDescription: 'Ferramenta avançada que utiliza processamento de linguagem natural para auxiliar advogados na elaboração de petições e documentos jurídicos.',
    image: '/images/projects/calc-juridico.png',
    hasCustomImage: true,
    tech: ['Python', 'NLP', 'GPT', 'Django', 'PostgreSQL'],
    features: [
      'Geração automática de petições',
      'Templates jurídicos inteligentes',
      'Análise de jurisprudência',
      'Preenchimento automático de formulários',
      'Controle de processos',
      'Integração com sistemas jurídicos'
    ],
    metrics: {
      efficiency: '+400%',
      accuracy: '95%',
      timeReduction: '70%',
      satisfaction: '4.8/5'
    },
    icon: FileText,
    color: 'from-blue-500 to-indigo-500',
    demoUrl: '#',
    caseStudyUrl: '/cases/calc-juridico',
    initials: 'CJ',
    bgColor: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'agro-climatico',
    title: 'Monitoramento Climático',
    category: 'IoT & Analytics',
    sector: 'Agronegócio',
    description: 'Dashboard para análise de dados agrometeorológicos em tempo real, auxiliando no monitoramento climático e tomada de decisões agrícolas.',
    longDescription: 'Sistema de monitoramento climático desenvolvido para o IDR-Paraná, processando dados de estações agrometeorológicas para análise e previsão.',
    image: '/images/projects/agro-climatico.png',
    hasCustomImage: true,
    tech: ['Python', 'Streamlit', 'IoT', 'Time Series', 'APIs'],
    features: [
      'Monitoramento em tempo real',
      'Análise de umidade relativa',
      'Histórico de dados climáticos',
      'Alertas meteorológicos',
      'Dashboards interativos',
      'API de dados abertos'
    ],
    metrics: {
      stations: '10 estações',
      dataPoints: '1M+ registros',
      accuracy: '98%',
      uptime: '99.9%'
    },
    icon: Sprout,
    color: 'from-green-400 to-blue-500',
    demoUrl: '#',
    caseStudyUrl: '/cases/agro-climatico',
    initials: 'MC',
    bgColor: 'from-green-400 to-blue-500'
  },
  {
    id: 'lesco-crm',
    title: 'LESCO - CRM Moveleiro',
    category: 'Business Intelligence',
    sector: 'Industrial Moveleiro',
    description: 'Sistema CRM completo para o setor moveleiro com análise de pipeline de vendas, gestão de leads e análise de performance comercial.',
    longDescription: 'Plataforma de CRM especializada para o setor moveleiro, com funcionalidades específicas para gestão de vendas e relacionamento com clientes.',
    image: '/images/projects/lesco-crm.png',
    hasCustomImage: true,
    tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'APIs'],
    features: [
      'Gestão de pipeline de vendas',
      'Análise de conversão',
      'Segmentação de clientes',
      'Dashboards executivos',
      'Relatórios automatizados',
      'Integração com sistemas'
    ],
    metrics: {
      pipeline: 'R$ 2.0B',
      conversion: '1.3%',
      leads: '372 ativos',
      ticket: 'R$ 2.0M'
    },
    icon: Home,
    color: 'from-purple-500 to-pink-500',
    demoUrl: '#',
    caseStudyUrl: '/cases/lesco-crm',
    initials: 'LC',
    bgColor: 'from-purple-500 to-pink-500'
  },
  {
    id: 'chatgal-bi',
    title: 'ChatGal - IA Conversacional',
    category: 'Inteligência Artificial',
    sector: 'Business Intelligence',
    description: 'Chatbot inteligente para análise de dados através de linguagem natural, permitindo consultas complexas de forma simples e intuitiva.',
    longDescription: 'Sistema de IA conversacional que permite análise de dados complexos através de perguntas em linguagem natural, democratizando o acesso a insights.',
    image: '/images/projects/chatgal.png',
    hasCustomImage: true,
    tech: ['Python', 'OpenAI', 'LangChain', 'Streamlit', 'Pandas'],
    features: [
      'Consultas em linguagem natural',
      'Análise de dados automática',
      'Geração de gráficos',
      'Insights automatizados',
      'Integração com múltiplas fontes',
      'Interface conversacional'
    ],
    metrics: {
      queries: '10k+ consultas',
      accuracy: '92%',
      satisfaction: '4.7/5',
      timeReduction: '80%'
    },
    icon: MessageSquare,
    color: 'from-green-500 to-teal-500',
    demoUrl: '#',
    caseStudyUrl: '/cases/chatgal',
    initials: 'CG',
    bgColor: 'from-green-500 to-teal-500'
  },
  {
    id: 'visao-computacional',
    title: 'Detecção de Pessoas em Vídeo',
    category: 'Visão Computacional',
    sector: 'Pesquisa Acadêmica',
    description: 'Sistema de visão computacional para detecção e contagem de pessoas em vídeos, utilizando algoritmos avançados de deep learning.',
    longDescription: 'Solução de computer vision desenvolvida para pesquisa acadêmica, capaz de detectar e rastrear pessoas em tempo real com alta precisão.',
    image: '/images/projects/visao-computacional.png',
    hasCustomImage: true,
    tech: ['Python', 'OpenCV', 'YOLO', 'TensorFlow', 'Deep Learning'],
    features: [
      'Detecção em tempo real',
      'Rastreamento de objetos',
      'Contagem automática',
      'Análise de comportamento',
      'Processamento de vídeo',
      'Interface web responsiva'
    ],
    metrics: {
      accuracy: '95.2%',
      fps: '30 FPS',
      detection: '99.8%',
      latency: '<100ms'
    },
    icon: Eye,
    color: 'from-indigo-500 to-purple-500',
    demoUrl: '#',
    caseStudyUrl: '/cases/visao-computacional',
    initials: 'VC',
    bgColor: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'predicao-soja',
    title: 'Predição Soja - Machine Learning',
    category: 'Machine Learning',
    sector: 'Pesquisa & Desenvolvimento',
    description: 'Sistema de predição de teor de carbono em soja utilizando algoritmos de machine learning avançados como LightGBM.',
    longDescription: 'Projeto de pesquisa em parceria com a Embrapa para desenvolvimento de modelos preditivos para análise de características da soja.',
    image: '/images/projects/predicao-soja.png',
    hasCustomImage: true,
    tech: ['Python', 'LightGBM', 'Scikit-learn', 'Streamlit', 'Bootstrap'],
    features: [
      'Modelos de regressão avançados',
      'Análise de outliers',
      'Validação cruzada',
      'Intervalos de confiança',
      'Visualização de resultados',
      'Interface intuitiva'
    ],
    metrics: {
      accuracy: '95%',
      confidence: '95%',
      rmse: '0.48',
      models: '2 modelos'
    },
    icon: Brain,
    color: 'from-yellow-500 to-orange-500',
    demoUrl: '#',
    caseStudyUrl: '/cases/predicao-soja',
    initials: 'PS',
    bgColor: 'from-yellow-500 to-orange-500'
  }
];

// Arrays de filtros
const categories = ['Todos', 'Analytics', 'IA Preditiva', 'Processamento de Linguagem Natural', 'IoT & Analytics', 'Business Intelligence', 'Inteligência Artificial', 'Visão Computacional', 'Machine Learning'];
const sectors = ['Todos', 'Hortifrutigranjeiro', 'Jurídico', 'Agronegócio', 'Industrial Moveleiro', 'Business Intelligence', 'Pesquisa Acadêmica', 'Pesquisa & Desenvolvimento'];

// Componente para Avatar do projeto
const ProjectAvatar = ({ project, size = 'md' }: { project: typeof projects[0], size?: 'sm' | 'md' | 'lg' }) => {
  const [imageError, setImageError] = useState(!project.hasCustomImage);
  
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  if (imageError || !project.hasCustomImage) {
    // Avatar com iniciais e ícone
    return (
      <div className={`${sizeClasses[size]} rounded-xl bg-gradient-to-br ${project.bgColor} flex items-center justify-center text-white shadow-lg relative overflow-hidden`}>
        <project.icon className={`${size === 'lg' ? 'w-16 h-16' : size === 'md' ? 'w-12 h-12' : 'w-6 h-6'} text-white/90`} />
        <div className={`absolute bottom-1 right-1 ${textSizes.sm} font-bold bg-black/20 px-1 rounded`}>
          {project.initials}
        </div>
      </div>
    );
  }

  // Tentar carregar imagem real
  return (
    <div className={`${sizeClasses[size]} rounded-xl overflow-hidden shadow-lg relative`}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
        sizes={size === 'lg' ? '128px' : size === 'md' ? '96px' : '48px'}
        onError={() => setImageError(true)}
      />
    </div>
  );
};

// Componente principal
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedSector, setSelectedSector] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'Todos' || project.category === selectedCategory;
    const sectorMatch = selectedSector === 'Todos' || project.sector === selectedSector;
    return categoryMatch && sectorMatch;
  });

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  const handleImageError = (projectId: string) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>
      
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50/80 dark:bg-primary-900/30 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 rounded-full px-4 py-2 text-primary-700 dark:text-primary-300 font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Cases de Sucesso</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-dark-900 dark:text-white">
              Projetos que transformaram{' '}
            </span>
            <span className="gradient-text">
              negócios reais
            </span>
          </h2>
          
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto text-balance">
            Conheça alguns dos projetos que desenvolvemos, desde analytics avançados 
            até soluções de IA que geraram impacto real para nossos clientes.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-6 mb-12"
        >
          {/* Category Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
              <Filter className="w-4 h-4 inline mr-2" />
              Filtrar por Categoria
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-dark-700 border border-dark-200 dark:border-dark-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Sector Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
              <Users className="w-4 h-4 inline mr-2" />
              Filtrar por Setor
            </label>
            <div className="flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(sector)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedSector === sector
                      ? 'bg-accent-600 text-white shadow-lg'
                      : 'bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-accent-50 dark:hover:bg-dark-700 border border-dark-200 dark:border-dark-700'
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br overflow-hidden">
                      {/* Verificar se há imagem personalizada e se não houve erro */}
                      {project.hasCustomImage && !imageErrors[project.id] ? (
                        <div className="absolute inset-0">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onError={() => handleImageError(project.id)}
                          />
                          {/* Overlay escuro para melhor legibilidade */}
                          <div className="absolute inset-0 bg-black/20"></div>
                        </div>
                      ) : (
                        <>
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </>
                      )}
                      
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-white text-xs">
                          {project.sector}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      
                      <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-400 dark:text-dark-500 text-xs rounded-md">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Metrics Preview */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-dark-200 dark:border-dark-700">
                        {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                              {value}
                            </div>
                            <div className="text-xs text-dark-500 dark:text-dark-400 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="glass-effect rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Pronto para ser nosso próximo case de sucesso?
            </h3>
            <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
              Vamos discutir como podemos transformar os dados da sua empresa 
              em soluções que geram impacto real e mensurável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Iniciar Projeto</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-800 text-dark-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-dark-200/50 dark:border-dark-700/50"
              >
                Conhecer a Galtra
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-dark-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">
                      {selectedProjectData.title}
                    </h3>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                        {selectedProjectData.category}
                      </span>
                      <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full text-sm">
                        {selectedProjectData.sector}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-dark-500 hover:text-dark-700 dark:text-dark-400 dark:hover:text-dark-200"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-dark-600 dark:text-dark-300 mb-8 text-lg leading-relaxed">
                  {selectedProjectData.longDescription}
                </p>

                {/* Features & Metrics Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                      Principais Funcionalidades
                    </h4>
                    <ul className="space-y-2">
                      {selectedProjectData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-dark-600 dark:text-dark-300">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                      Resultados Alcançados
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(selectedProjectData.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-gray-50 dark:bg-dark-800 rounded-lg">
                          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                            {value}
                          </div>
                          <div className="text-sm text-dark-500 dark:text-dark-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                    Tecnologias Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProjectData.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Link
                    href={selectedProjectData.caseStudyUrl}
                    className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Ver Case Completo</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-white dark:bg-dark-800 text-dark-900 dark:text-white px-6 py-3 rounded-lg font-semibold border border-dark-200 dark:border-dark-700 hover:bg-gray-50 dark:hover:bg-dark-700 transition-all duration-200"
                  >
                    Solicitar Projeto Similar
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}