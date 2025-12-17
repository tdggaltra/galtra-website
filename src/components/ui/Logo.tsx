'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface LogoProps {
  variant?: 'default' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
  xl: 'h-16',
};

export default function Logo({
  variant = 'default',
  size = 'md',
  showText = true,
  className = ''
}: LogoProps) {
  // 🎯 ADICIONAR APENAS ESTAS LINHAS
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verifica o tema inicial
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    // Observer para detectar mudanças no tema
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const isDarkMode = document.documentElement.classList.contains('dark');
          setIsDark(isDarkMode);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // 🎯 FUNÇÃO PARA ESCOLHER A LOGO
  const getLogoSrc = () => {
    // Se variant específico for passado, usa ele
    if (variant === 'white') {
      return '/images/logo-galtrabranco.png';
    }
    if (variant === 'dark') {
      return '/images/logo-galtrapreto.png';
    }
    
    // Caso contrário, usa baseado no tema atual
    return isDark 
      ? '/images/logo-galtrabranco.png'  // Logo branca no tema escuro
      : '/images/logo-galtrapreto.png';  // Logo preta no tema claro
  };

  return (
    <Link
      href="/"
      className={`flex items-center space-x-3 group ${className}`}
    >
      {/* Logo Image */}
      <div className="relative flex-shrink-0">
        <Image
          src={getLogoSrc()}
          alt="Galtra - Data Science and Analytics"
          width={size === 'sm' ? 32 : size === 'md' ? 40 : size === 'lg' ? 48 : 64}
          height={size === 'sm' ? 32 : size === 'md' ? 40 : size === 'lg' ? 48 : 64}
          className={`${sizeClasses[size]} w-auto transition-transform duration-300 group-hover:scale-110`}
          priority
          key={isDark ? 'dark' : 'light'}
        />
      </div>

      {/* Company Name */}
      {showText && (
        <div className="hidden sm:block">
          <div className={`font-bold transition-colors duration-200 ${
            variant === 'white'
              ? 'text-white'
              : variant === 'dark'
              ? 'text-dark-900'
              : 'text-dark-900 dark:text-white'
          } ${
            size === 'sm'
              ? 'text-lg'
              : size === 'md'
              ? 'text-xl'
              : size === 'lg'
              ? 'text-2xl'
              : 'text-3xl'
          }`}>
            GALTRA
          </div>
          <div className={`text-xs font-medium transition-colors duration-200 ${
            variant === 'white'
              ? 'text-white/80'
              : variant === 'dark'
              ? 'text-dark-600'
              : 'text-dark-600 dark:text-dark-400'
          }`}>
            Data Science and Analytics
          </div>
        </div>
      )}
    </Link>
  );
}