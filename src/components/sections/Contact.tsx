'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  MessageCircle,
  CheckCircle,
  Calendar,
  Users,
  Briefcase
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
};

const services = [
  'Ciência de Dados',
  'Inteligência Artificial',
  'Machine Learning',
  'Visão Computacional',
  'Processamento de Linguagem Natural',
  'MLOps & Automação',
  'Big Data Engineering',
  'Consultoria Estratégica',
];

const budgetRanges = [
  'Até R$ 50k',
  'R$ 50k - R$ 100k',
  'R$ 100k - R$ 250k',
  'R$ 250k - R$ 500k',
  'Acima de R$ 500k',
  'A definir',
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'contato@galtra.com.br',
    description: 'Resposta em até 2 horas',
    href: 'mailto:contato@galtra.com.br',
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: '+55 (11) 99999-9999',
    description: 'Segunda a Sexta, 8h às 18h',
    href: 'tel:+5511999999999',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'São Paulo, SP',
    description: 'Atendimento presencial e remoto',
    href: '#',
  },
];

const faqs = [
  {
    question: 'Qual o tempo médio de um projeto?',
    answer: 'Varia de 2 a 6 meses dependendo da complexidade, mas sempre definimos marcos claros e entregas incrementais.',
  },
  {
    question: 'Vocês trabalham com empresas de que porte?',
    answer: 'Atendemos desde startups até grandes corporações, adaptando nossa abordagem ao tamanho e necessidades de cada cliente.',
  },
  {
    question: 'Como funciona o processo de descoberta?',
    answer: 'Começamos com workshops para entender seus dados, processos e objetivos, seguido de uma proposta personalizada.',
  },
  {
    question: 'Oferecem suporte pós-implementação?',
    answer: 'Sim, oferecemos diferentes níveis de suporte e manutenção para garantir o sucesso contínuo da solução.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'schedule'>('form');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormData);
      
      // Reset após 5 segundos
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50/50 dark:from-dark-900 dark:to-dark-800/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>
      
      <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

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
            <MessageCircle className="w-4 h-4" />
            <span>Fale Conosco</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-dark-900 dark:text-white">
              Vamos transformar seus{' '}
            </span>
            <span className="gradient-text">
              dados em resultados
            </span>
          </h2>
          
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto text-balance">
            Entre em contato conosco e descubra como podemos acelerar o crescimento 
            do seu negócio com soluções inteligentes e personalizadas.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={info.title} className="text-center group">
                <a
                  href={info.href}
                  className="glass-effect rounded-xl p-6 block hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-dark-500 dark:text-dark-400">
                    {info.description}
                  </p>
                </a>
              </div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-2xl p-8"
            >
              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-8 bg-dark-100 dark:bg-dark-800 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('form')}
                  className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                    activeTab === 'form'
                      ? 'bg-white dark:bg-dark-700 text-dark-900 dark:text-white shadow-sm'
                      : 'text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </button>
                <button
                  onClick={() => setActiveTab('schedule')}
                  className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                    activeTab === 'schedule'
                      ? 'bg-white dark:bg-dark-700 text-dark-900 dark:text-white shadow-sm'
                      : 'text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Reunião</span>
                </button>
              </div>

              {activeTab === 'form' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200"
                        placeholder="Seu nome"
                        disabled={isSubmitting || isSubmitted}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200"
                        placeholder="seu@email.com"
                        disabled={isSubmitting || isSubmitted}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200"
                        placeholder="Nome da sua empresa"
                        disabled={isSubmitting || isSubmitted}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200"
                        placeholder="(11) 99999-9999"
                        disabled={isSubmitting || isSubmitted}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Serviço de Interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white transition-colors duration-200"
                        disabled={isSubmitting || isSubmitted}
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Orçamento Estimado
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white transition-colors duration-200"
                        disabled={isSubmitting || isSubmitted}
                      >
                        <option value="">Selecione uma faixa</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200 resize-none"
                      placeholder="Conte-nos mais sobre seu projeto, desafios ou objetivos..."
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting || isSubmitted}
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Mensagem Enviada!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                    >
                      <p className="text-green-700 dark:text-green-300">
                        Obrigado! Recebemos sua mensagem e entraremos em contato em breve.
                      </p>
                    </motion.div>
                  )}
                </form>
              ) : (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 mx-auto text-primary-600 mb-6" />
                  <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                    Agende uma Consulta Gratuita
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-8 max-w-md mx-auto">
                    Reserve 30 minutos para uma conversa estratégica sobre como podemos 
                    ajudar seu negócio com IA e Ciência de Dados.
                  </p>
                  <button className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Agendar Agora
                  </button>
                  <p className="text-sm text-dark-500 dark:text-dark-400 mt-4">
                    Sem compromisso • Consultoria gratuita • Resposta garantida
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
                Perguntas Frequentes
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-dark-200 dark:border-dark-700 last:border-b-0 pb-4 last:pb-0">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full text-left text-dark-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 flex items-center justify-between"
                    >
                      <span>{faq.question}</span>
                      <motion.div
                        animate={{ rotate: expandedFaq === index ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-2xl"
                      >
                        +
                      </motion.div>
                    </button>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 text-dark-600 dark:text-dark-300 text-sm leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
                Por que escolher a Galtra?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dark-900 dark:text-white">Resposta Rápida</p>
                    <p className="text-sm text-dark-600 dark:text-dark-300">Retorno em até 2 horas úteis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dark-900 dark:text-white">Time Experiente</p>
                    <p className="text-sm text-dark-600 dark:text-dark-300">15+ anos de experiência em IA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dark-900 dark:text-white">Projetos de Sucesso</p>
                    <p className="text-sm text-dark-600 dark:text-dark-300">250+ projetos entregues</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}