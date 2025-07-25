'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import SimpleThemeToggle from '@/components/ui/SimpleThemeToggle'; // Final

const navigation = [
  { name: 'Início', href: '/' },
  { 
    name: 'Serviços', 
    href: '/services',
    submenu: [
      { name: 'Ciência de Dados', href: '/services/data-science' },
      { name: 'Inteligência Artificial', href: '/services/artificial-intelligence' },
      { name: 'Machine Learning', href: '/services/machine-learning' },
      { name: 'Analytics Avançado', href: '/services/analytics' },
    ]
  },
  { name: 'Projetos', href: '/projects' },
  { name: 'Equipe', href: '/team' },
  { name: 'Blog', href: '/blog' },
  { name: 'Sobre', href: '/about' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // 🧪 COMPONENTE DE TESTE INLINE
  const TestButton = () => (
    <button
      onClick={() => alert('Botão funciona!')}
      style={{
        background: 'red',
        color: 'white',
        padding: '8px 12px',
        border: 'none',
        borderRadius: '4px',
        fontSize: '12px',
      }}
    >
      TESTE
    </button>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo
            size="md" 
            showText={true}
            className="transition-transform duration-200 hover:scale-105"
          />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 py-2"
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.submenu && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 glass-effect rounded-xl shadow-xl border border-white/10 py-2"
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-3 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/5 transition-colors duration-200"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* 🧪 DESKTOP: CTA Button + TESTE */}
          <div className="hidden lg:flex items-center space-x-4">
            <SimpleThemeToggle /> {/* 🔥 THEME TOGGLE AQUI */}
            
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Fale Conosco
            </Link>
          </div>

          {/* 🧪 MOBILE: Menu button + TESTE */}
          <div className="lg:hidden flex items-center space-x-3">
            <SimpleThemeToggle /> {/* 🔥 THEME TOGGLE AQUI */}
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-dark-700 dark:text-dark-300" />
              ) : (
                <Menu className="w-6 h-6 text-dark-700 dark:text-dark-300" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/10 mt-4"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="block px-4 py-3 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/5 rounded-lg transition-colors duration-200 flex-1"
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <button
                          onClick={() => 
                            setActiveDropdown(
                              activeDropdown === item.name ? null : item.name
                            )
                          }
                          className="px-4 py-3"
                        >
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {item.submenu && activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 border-l border-white/10"
                        >
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              onClick={closeMenu}
                              className="block px-4 py-2 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-all duration-200 transform hover:scale-105"
                  >
                    Fale Conosco
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}