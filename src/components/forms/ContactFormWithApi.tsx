'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useContactForm } from '@/hooks/useApi';

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

export default function ContactFormWithApi() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const { loading, error, submitContact } = useContactForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitContact(formData);
      setIsSubmitted(true);
      setFormData(initialFormData);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      // Error is handled by the hook
      console.error('Erro ao enviar formulário:', error);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
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
            disabled={loading}
            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200 disabled:opacity-50"
            placeholder="Seu nome"
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
            disabled={loading}
            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200 disabled:opacity-50"
            placeholder="seu@email.com"
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
            disabled={loading}
            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200 disabled:opacity-50"
            placeholder="Nome da sua empresa"
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
            disabled={loading}
            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200 disabled:opacity-50"
            placeholder="(11) 99999-9999"
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
            disabled={loading}
            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white transition-colors duration-200 disabled:opacity-50"
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
            disabled={loading}
            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white transition-colors duration-200 disabled:opacity-50"
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
          disabled={loading}
          className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 transition-colors duration-200 resize-none disabled:opacity-50"
          placeholder="Conte-nos mais sobre seu projeto, desafios ou objetivos..."
        />
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300"
        >
          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>{error}</span>
        </motion.div>
      )}

      {/* Success Message */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300"
        >
          <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
        </motion.div>
      )}

      <button
        type="submit"
        disabled={!isFormValid || loading}
        className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Enviar Mensagem</span>
          </>
        )}
      </button>
    </form>
  );
}
