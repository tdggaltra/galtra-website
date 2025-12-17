'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram,
  ArrowRight,
  Send,
  Check
} from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Ciência de Dados', href: '/services/data-science' },
    { name: 'Inteligência Artificial', href: '/services/artificial-intelligence' },
    { name: 'Machine Learning', href: '/services/machine-learning' },
    { name: 'Analytics Avançado', href: '/services/analytics' },
  ],
  company: [
    { name: 'Sobre Nós', href: '/about' },
    { name: 'Nossa Equipe', href: '/team' },
    { name: 'Projetos', href: '/projects' },
    { name: 'Blog', href: '/blog' },
  ],
  resources: [
    { name: 'Documentação', href: '/docs' },
    { name: 'Estudos de Caso', href: '/case-studies' },
    { name: 'Whitepapers', href: '/whitepapers' },
    { name: 'Webinars', href: '/webinars' },
  ],
  legal: [
    { name: 'Política de Privacidade', href: '/privacy' },
    { name: 'Termos de Serviço', href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'LGPD', href: '/lgpd' },
  ],
};

const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    href: 'https://linkedin.com/company/tiago-galvao-361517284',
    color: 'hover:text-blue-600'
  },
  { 
    name: 'GitHub', 
    icon: Github, 
    href: 'https://github.com/tdggaltra',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  { 
    name: 'Twitter', 
    icon: Twitter, 
    href: 'https://twitter.com/galtra',
    color: 'hover:text-sky-500'
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    href: 'https://instagram.com/galtra_datascience',
    color: 'hover:text-pink-600'
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simular envio da newsletter
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset depois de 3 segundos
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  return (
    <footer className="bg-dark-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-dark-700/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Fique por dentro das{' '}
                  <span className="gradient-text">últimas tendências</span>
                </h2>
                <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
                  Receba insights exclusivos sobre Ciência de Dados, IA e as últimas 
                  inovações tecnológicas direto no seu email.
                </p>

                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor email"
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder-dark-400 text-white"
                      disabled={isLoading || isSubscribed}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || isSubscribed || !email}
                    className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 text-white"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : isSubscribed ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Inscrito!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Inscrever</span>
                      </>
                    )}
                  </button>
                </form>

                <p className="text-dark-400 text-sm mt-4">
                  Sem spam. Cancele a qualquer momento.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo - 🎯 SEMPRE LOGO BRANCA NO FOOTER */}
                <Link href="/" className="flex items-center space-x-3 group mb-6">
                  <div className="relative flex-shrink-0">
                    <Image
                      src="/images/logo-galtrabranco.png"
                      alt="Galtra - Data Science and Analytics"
                      width={40}
                      height={40}
                      className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-2xl font-bold gradient-text">Galtra</span>
                </Link>

                <p className="text-dark-300 mb-6 leading-relaxed">
                  Transformamos dados complexos em insights estratégicos que impulsionam 
                  o crescimento do seu negócio através de soluções inovadoras em IA e Machine Learning.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-dark-300">
                    <Mail className="w-5 h-5 text-primary-400" />
                    <span>contato@galtra.com.br</span>
                  </div>
                  <div className="flex items-center space-x-3 text-dark-300">
                    <Phone className="w-5 h-5 text-primary-400" />
                    <span>+55 (11) 99999-9999</span>
                  </div>
                  <div className="flex items-center space-x-3 text-dark-300">
                    <MapPin className="w-5 h-5 text-primary-400" />
                    <span>São Paulo, SP - Brasil</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-white">Serviços</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-dark-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-white">Empresa</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-dark-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-white">Recursos</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-dark-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Legal */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-dark-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-dark-400 text-sm"
              >
                © {new Date().getFullYear()} Galtra. Todos os direitos reservados.
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg bg-dark-800/50 hover:bg-dark-700/50 text-dark-400 ${social.color} transition-all duration-200 transform hover:scale-110`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}