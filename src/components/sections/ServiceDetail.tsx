'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Users, Target, TrendingUp, Cog, Lightbulb } from 'lucide-react';
import Link from 'next/link';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  cases?: string[];
  processSteps?: string[]; // Renomeado de 'process' para 'processSteps'
}

export default function ServiceDetail({
  title,
  subtitle,
  description,
  features,
  benefits,
  technologies,
  cases = [],
  processSteps = [], // Valor padrão para evitar erros
}: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 dark:from-dark-900 dark:to-dark-800/50">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary-50/80 dark:bg-primary-900/30 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 rounded-full px-6 py-3 text-primary-700 dark:text-primary-300 font-medium mb-8"
            >
              <Zap className="w-5 h-5" />
              <span>Serviço Especializado</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {subtitle}
            </motion.p>
            
            <motion.p 
              className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-white/20 dark:border-dark-700/50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
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
                      className="flex items-start text-dark-600 dark:text-dark-300 group"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="leading-relaxed">{feature}</span>
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
              <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-white/20 dark:border-dark-700/50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
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
                      className="flex items-start text-dark-600 dark:text-dark-300 group"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="leading-relaxed">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 lg:py-24 bg-gray-50/50 dark:bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6 flex items-center justify-center">
              <Cog className="w-8 h-8 text-primary-600 mr-3" />
              Tecnologias Utilizadas
            </h2>
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-6 py-3 bg-white dark:bg-dark-900 text-primary-700 dark:text-primary-300 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-primary-100 dark:border-primary-800"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      {processSteps.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-accent-600 mr-3" />
                Nosso Processo
              </h2>
              <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
                Uma metodologia estruturada para garantir resultados excepcionais
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-white/20 dark:border-dark-700/50 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 group">
                    {/* Step Number */}
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      {/* Connecting Line */}
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-accent-300 transform -translate-y-1/2 z-0" />
                      )}
                    </div>
                    
                    {/* Step Content */}
                    <h3 className="font-semibold text-dark-900 dark:text-white mb-2">
                      Etapa {index + 1}
                    </h3>
                    <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                      {step}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cases de Sucesso */}
      {cases.length > 0 && (
        <section className="py-16 lg:py-24 bg-gray-50/50 dark:bg-dark-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6">
                Cases de Sucesso
              </h2>
              <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
                Resultados reais que nossos clientes alcançaram
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {cases.map((caseItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-white/20 dark:border-dark-700/50 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                        {caseItem}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-3xl p-8 lg:p-16 max-w-5xl mx-auto border border-primary-100 dark:border-primary-800">
              <Users className="w-20 h-20 mx-auto text-primary-600 mb-8" />
              
              <h3 className="text-3xl lg:text-4xl font-bold text-dark-900 dark:text-white mb-6">
                Pronto para implementar{' '}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  {title.toLowerCase()}
                </span>
                ?
              </h3>
              
              <p className="text-xl text-dark-600 dark:text-dark-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Vamos conversar sobre como podemos aplicar {title.toLowerCase()} 
                para resolver os desafios específicos do seu negócio e acelerar seus resultados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-3"
                >
                  <span>Solicitar Consulta Gratuita</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                
                <Link
                  href="/projects"
                  className="group bg-white dark:bg-dark-800 hover:bg-gray-50 dark:hover:bg-dark-700 text-dark-900 dark:text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl border-2 border-primary-200 dark:border-primary-700 hover:border-primary-300 dark:hover:border-primary-600"
                >
                  Ver Cases de Sucesso
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-10 pt-8 border-t border-primary-200 dark:border-primary-700">
                <p className="text-sm text-dark-500 dark:text-dark-400 mb-4">
                  Mais de 250 empresas confiam em nossas soluções
                </p>
                <div className="flex items-center justify-center space-x-6 opacity-60">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-accent-600 rounded"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}