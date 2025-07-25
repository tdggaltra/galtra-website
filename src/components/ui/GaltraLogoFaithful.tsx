'use client';

import { motion } from 'framer-motion';

interface GaltraLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  animate?: boolean;
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

export default function GaltraLogo({ 
  size = 'md', 
  showText = false, 
  className = '',
  animate = true 
}: GaltraLogoProps) {
  
  const LogoSVG = () => (
    <svg 
      viewBox="0 0 100 100" 
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
    >
      {/* Definição dos gradientes */}
      <defs>
        <linearGradient 
          id="galtra-gradient" 
          x1="0%" 
          y1="0%" 
          x2="100%" 
          y2="100%"
        >
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#c026d3" />
        </linearGradient>
        
        <linearGradient 
          id="galtra-gradient-hover" 
          x1="0%" 
          y1="0%" 
          x2="100%" 
          y2="100%"
        >
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#a21caf" />
        </linearGradient>
      </defs>
      
      {/* LETRA G - Formato fiel à logo original */}
      
      {/* Círculo principal do G (como um "C" com abertura) */}
      <motion.path
        d="M 70 25 
           L 50 25 
           A 25 25 0 1 0 50 75 
           L 70 75"
        stroke="url(#galtra-gradient)"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="hover:stroke-[url(#galtra-gradient-hover)] transition-all duration-300"
      />
      
      {/* Barra horizontal interna do G */}
      <motion.path
        d="M 50 50 L 65 50 L 65 40"
        stroke="url(#galtra-gradient)"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
        className="hover:stroke-[url(#galtra-gradient-hover)] transition-all duration-300"
      />
      
      {/* Ponto decorativo superior direito */}
      <motion.circle
        cx="85"
        cy="20"
        r="5"
        fill="url(#galtra-gradient)"
        initial={animate ? { scale: 0 } : { scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
        className="hover:fill-[url(#galtra-gradient-hover)] transition-all duration-300"
      />
      
      {/* Elemento triangular/seta (parte característica da logo) */}
      <motion.path
        d="M 15 35 L 15 65 L 35 50 Z"
        fill="url(#galtra-gradient)"
        initial={animate ? { scale: 0, x: -10 } : { scale: 1, x: 0 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.8, 
          type: "spring",
          stiffness: 150 
        }}
        className="hover:fill-[url(#galtra-gradient-hover)] transition-all duration-300"
      />
    </svg>
  );

  if (!showText) {
    return <LogoSVG />;
  }

  return (
    <motion.div 
      className={`flex items-center space-x-3 ${className}`}
      whileHover={animate ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
    >
      <LogoSVG />
      <motion.span 
        className={`font-bold gradient-text ${textSizes[size]}`}
        initial={animate ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 2.2 }}
      >
        Galtra
      </motion.span>
    </motion.div>
  );
}