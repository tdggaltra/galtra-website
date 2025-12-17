'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

interface ResponsiveLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10', 
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
};

const textSizes = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl', 
  xl: 'text-3xl'
};

export default function ResponsiveLogo({ 
  size = 'md', 
  showText = false, 
  className = ''
}: ResponsiveLogoProps) {
  const { theme } = useTheme();

  const LogoSVG = () => (
    <motion.svg 
      viewBox="0 0 100 100" 
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      key={theme} // Força re-render quando tema muda
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <defs>
        {/* Gradiente para tema claro */}
        <linearGradient 
          id="logo-gradient-light" 
          x1="0%" 
          y1="0%" 
          x2="100%" 
          y2="100%"
        >
          <stop offset="0%" stopColor="#2563eb" /> {/* primary-600 */}
          <stop offset="100%" stopColor="#c026d3" /> {/* accent-600 */}
        </linearGradient>
        
        {/* Gradiente para tema escuro - cores mais vibrantes */}
        <linearGradient 
          id="logo-gradient-dark" 
          x1="0%" 
          y1="0%" 
          x2="100%" 
          y2="100%"
        >
          <stop offset="0%" stopColor="#60a5fa" /> {/* primary-400 - mais claro */}
          <stop offset="50%" stopColor="#a855f7" /> {/* purple-500 - meio termo */}
          <stop offset="100%" stopColor="#e879f9" /> {/* accent-400 - mais vibrante */}
        </linearGradient>

        {/* Efeito glow para tema escuro */}
        <filter id="glow-effect">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Círculo principal com cores que mudam por tema */}
      <motion.path
        d="M 15 50 A 35 35 0 1 1 50 15"
        stroke={theme === 'dark' ? 'url(#logo-gradient-dark)' : 'url(#logo-gradient-light)'}
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        filter={theme === 'dark' ? 'url(#glow-effect)' : 'none'}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* Ponto superior com cores temáticas */}
      <motion.circle
        cx="75"
        cy="25"
        r="4"
        fill={theme === 'dark' ? 'url(#logo-gradient-dark)' : 'url(#logo-gradient-light)'}
        filter={theme === 'dark' ? 'url(#glow-effect)' : 'none'}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      
      {/* Triângulo/seta com cores temáticas */}
      <motion.path
        d="M 25 40 L 25 60 L 45 50 Z"
        fill={theme === 'dark' ? 'url(#logo-gradient-dark)' : 'url(#logo-gradient-light)'}
        filter={theme === 'dark' ? 'url(#glow-effect)' : 'none'}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />

      {/* Elemento extra para tema escuro - pontos decorativos */}
      {theme === 'dark' && (
        <>
          <motion.circle
            cx="30"
            cy="30"
            r="1.5"
            fill="url(#logo-gradient-dark)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />
          <motion.circle
            cx="70"
            cy="70"
            r="1"
            fill="url(#logo-gradient-dark)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          />
        </>
      )}
    </motion.svg>
  );

  if (!showText) {
    return <LogoSVG />;
  }

  return (
    <motion.div 
      className={`flex items-center space-x-3 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <LogoSVG />
      <motion.span 
        className={`font-bold gradient-text ${textSizes[size]} transition-all duration-300`}
        key={`text-${theme}`} // Re-anima o texto quando tema muda
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Galtra
      </motion.span>
    </motion.div>
  );
}