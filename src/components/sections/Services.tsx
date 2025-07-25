'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Cpu, 
  Eye, 
  MessageSquare, 
  Zap,
  ArrowRight,
  CheckCircle,
  Play,
  TrendingUp,
  Database,
  Settings
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'data-science',
    icon: BarChart3,
    title: 'Ciência de Dados',
    subtitle: 'Transforme dados em insights estratégicos',
    description: 'Extraímos valor dos seus dados através de análises avançadas, modelagem estatística e visualizações interativas que orientam decisões de negócio.',
    features: [
      'Análise Exploratória de Dados',
      'Modelagem Estatística Avançada',
      'Dashboards Interativos',
      'Relatórios Automatizados',
      'KPIs e Métricas Personalizadas'
    ],
    technologies: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Apache Spark'],
    color: 'from-blue-600 to-cyan-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    href: '/services/data-science'
  },
  {
    id: 'artificial-intelligence',
    icon: Brain,
    title: 'Inteligência Artificial',
    subtitle: 'IA que resolve problemas reais',
    description: 'Desenvolvemos soluções de IA personalizadas que automatizam processos, otimizam operações e criam experiências inovadoras para seus clientes.',
    features: [
      'Machine Learning Personalizado',
      'Automação Inteligente',
      'Sistemas de Recomendação',
      'Chatbots e Assistentes Virtuais',
      'Análise Preditiva'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Hugging Face', 'MLflow'],
    color: 'from-purple-600 to-pink-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    href: '/services/artificial-intelligence'
  },
  {
    id: 'computer-vision',
    icon: Eye,
    title: 'Visão Computacional',
    subtitle: 'Machines que enxergam e entendem',
    description: 'Capacitamos máquinas para interpretar e analisar conteúdo visual, desde detecção de objetos até análise de comportamento em tempo real.',
    features: [
      'Detecção e Classificação de Objetos',
      'Reconhecimento Facial',
      'Análise de Imagens Médicas',
      'Controle de Qualidade Visual',
      'Monitoramento Inteligente'
    ],
    technologies: ['OpenCV', 'YOLO', 'ResNet', 'Detectron2', 'MediaPipe', 'TensorRT'],
    color: 'from-green-600 to-emerald-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    href: '/services/computer-vision'
  },
  {
    id: 'nlp',
    icon: MessageSquare,
    title: 'Processamento de Linguagem Natural',
    subtitle: 'Compreensão inteligente de texto',
    description: 'Analisamos e processamos linguagem natural para extrair insights, automatizar tarefas e criar interfaces conversacionais inteligentes.',
    features: [
      'Análise de Sentimentos',
      'Extração de Entidades',
      'Tradução Automática',
      'Sumarização de Textos',
      'Chatbots Inteligentes'
    ],
    technologies: ['spaCy', 'NLTK', 'BERT', 'GPT', 'Transformers', 'Rasa'],
    color: 'from-orange-600 to-red-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    href: '/services/nlp'
  },
  {
    id: 'mlops',
    icon: Settings,
    title: 'MLOps & Automação',
    subtitle: 'IA em produção de forma escalável',
    description: 'Implementamos pipelines robustos para colocar seus modelos de IA em produção com monitoramento, versionamento e escalabilidade.',
    features: [
      'Pipeline de ML Automatizado',
      'Monitoramento de Modelos',
      'Versionamento de Experimentos',
      'Deploy Automatizado',
      'Infraestrutura Escalável'
    ],
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Azure', 'GCP'],
    color: 'from-indigo-600 to-purple-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    href: '/services/mlops'
  },
  {
    id: 'big-data',
    icon: Database,
    title: 'Big Data Engineering',
    subtitle: 'Processar dados em qualquer escala',
    description: 'Construímos arquiteturas de dados robustas que processam, armazenam e disponibilizam grandes volumes de dados de forma eficiente.',
    features: [
      'Data Lakes e Warehouses',
      'ETL/ELT Automatizado',
      'Processamento em Tempo Real',
      'Arquitetura de Dados',
      'Data Governance'
    ],
    technologies: ['Apache Spark', 'Hadoop', 'Kafka', 'Airflow', 'Snowflake', 'Databricks'],
    color: 'from-teal-600 to-cyan-600',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    href: '/services/big-data'
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Descoberta',
    description: 'Entendemos seu negócio, dados e objetivos através de workshops colaborativos.'
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Definimos a arquitetura de dados e modelagem mais adequada para seus desafios.'
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Criamos protótipos e desenvolvemos soluções usando metodologias ágeis.'
  },
  {
    number: '04',
    title: 'Implementação',
    description: 'Colocamos a solução em produção com testes rigorosos e deploy seguro.'
  },
  {
    number: '05',
    title: 'Monitoramento',
    description: 'Acompanhamos performance e otimizamos continuamente os resultados.'
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [hoveredProcess, setHoveredProcess] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>
      
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-accent-400/10 to-primary-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>

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
            <span>Nossos Serviços</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-dark-900 dark:text-white">
              Soluções completas em{' '}
            </span>
            <span className="gradient-text">
              IA e Data Science
            </span>
          </h2>
          
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto text-balance">
            Oferecemos um portfólio completo de serviços para transformar seus dados 
            em vantagem competitiva através de tecnologias de ponta.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`
                  glass-effect rounded-2xl p-8 h-full transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl cursor-pointer relative overflow-hidden
                  ${isActive ? 'scale-105' : ''}
                `}>
                  {/* Background Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    
                    <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.subtitle}
                    </p>
                    
                    <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Preview */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3 mb-6"
                        >
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-center space-x-2 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-dark-600 dark:text-dark-300">{feature}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      <span className="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-400 dark:text-dark-500 text-xs rounded-md">
                        +{service.technologies.length - 3}
                      </span>
                    </div>
                    
                    {/* CTA */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center space-x-2 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 group/link"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-dark-900 dark:text-white mb-6">
            Nosso Processo de Trabalho
          </h3>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Uma metodologia comprovada que garante resultados excepcionais em cada projeto.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center relative z-10"
                  onMouseEnter={() => setHoveredProcess(index)}
                  onMouseLeave={() => setHoveredProcess(null)}
                >
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mb-4 transition-all duration-300 cursor-pointer
                    ${hoveredProcess === index 
                      ? 'bg-gradient-to-br from-primary-600 to-accent-600 text-white transform scale-110' 
                      : 'bg-white dark:bg-dark-800 border-2 border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400'
                    }
                  `}>
                    {step.number}
                  </div>
                  
                  <div className={`
                    glass-effect rounded-lg p-4 max-w-xs text-center transition-all duration-300
                    ${hoveredProcess === index ? 'shadow-xl scale-105' : ''}
                  `}>
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connecting Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 dark:from-primary-800 dark:via-primary-600 dark:to-primary-800 -z-10"></div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                  {step.number}
                </div>
                <div className="glass-effect rounded-lg p-4 flex-1">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <TrendingUp className="w-16 h-16 mx-auto text-primary-600 mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Pronto para acelerar seu crescimento com IA?
            </h3>
            <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
              Vamos criar uma solução personalizada que transforme seus dados em 
              vantagem competitiva real.
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
                className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-800 text-dark-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-dark-200/50 dark:border-dark-700/50 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Ver Cases de Sucesso</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}