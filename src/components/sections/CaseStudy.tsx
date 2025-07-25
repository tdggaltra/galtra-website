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
