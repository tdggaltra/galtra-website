'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Lightbulb, 
  Shield, 
  TrendingUp, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Cada projeto é desenvolvido com objetivos claros e métricas de sucesso bem definidas.',
  },
  {
    icon: Users,
    title: 'Colaboração Estratégica',
    description: 'Trabalhamos como uma extensão da sua equipe, compartilhando conhecimento e expertise.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação Contínua',
    description: 'Sempre exploramos as tecnologias mais avançadas para entregar soluções de ponta.',
  },
  {
    icon: Shield,
    title: 'Segurança e Privacidade',
    description: 'Seus dados estão seguros conosco. Seguimos rigorosamente as melhores práticas de segurança.',
  },
];

const achievements = [
  {
    number: '250+',
    label: 'Projetos Entregues',
    description: 'Soluções implementadas com sucesso em diversos setores',
  },
  {
    number: '98%',
    label: 'Taxa de Satisfação',
    description: 'Clientes que recomendam nossos serviços',
  },
  {
    number: '15+',
    label: 'Anos de Experiência',
    description: 'Expertise consolidada em ciência de dados e IA',
  },
  {
    number: '50+',
    label: 'Especialistas',
    description: 'Time multidisciplinar de cientistas de dados e engenheiros',
  },
];

const expertise = [
  'Machine Learning Avançado',
  'Deep Learning e Redes Neurais',
  'Processamento de Linguagem Natural',
  'Visão Computacional',
  'Analytics Preditivo',
  'Business Intelligence',
  'Big Data e Data Engineering',
  'MLOps e Automação',
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50/50 dark:from-dark-900 dark:to-dark-800/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>
      
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

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
            <Award className="w-4 h-4" />
            <span>Sobre a Galtra</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-dark-900 dark:text-white">
              Transformando o futuro com{' '}
            </span>
            <span className="gradient-text">
              dados inteligentes
            </span>
          </h2>
          
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto text-balance">
            Somos especialistas em extrair valor real dos seus dados, criando soluções 
            personalizadas que impulsionam a inovação e o crescimento sustentável.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-6">
                Nossa Missão
              </h3>
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
                Democratizar o acesso à inteligência artificial e ciência de dados, 
                tornando tecnologias complexas acessíveis e aplicáveis para empresas 
                de todos os tamanhos.
              </p>
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                Acreditamos que dados bem utilizados são o combustível da inovação e 
                podem resolver os desafios mais complexos do mundo moderno.
              </p>
            </div>

            {/* Expertise List */}
            <div>
              <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                Nossas Especialidades
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-dark-700 dark:text-dark-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/team"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Conheça Nossa Equipe</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Card */}
            <div className="glass-effect rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="text-center"
                  >
                    <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-dark-600 dark:text-dark-400 leading-relaxed">
                      {achievement.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -right-4 glass-effect rounded-xl p-4 shadow-lg"
            >
              <TrendingUp className="w-8 h-8 text-green-600" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-effect rounded-xl p-4 shadow-lg"
            >
              <Award className="w-8 h-8 text-primary-600" />
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-dark-900 dark:text-white mb-6">
            Nossos Valores
          </h3>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Os princípios que guiam nossa abordagem e definem nossa cultura organizacional.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="glass-effect rounded-xl p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Pronto para transformar seus dados em resultados?
            </h3>
            <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre como podemos ajudar sua empresa a alcançar 
              seus objetivos com soluções inteligentes e personalizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Iniciar Conversa</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-800 text-dark-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-dark-200/50 dark:border-dark-700/50"
              >
                Ver Nossos Projetos
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}