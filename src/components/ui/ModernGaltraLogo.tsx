'use client';

import { motion } from 'framer-motion';

interface ModernGaltraLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  variant?: 'default' | 'minimal' | 'bold';
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10', 
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
};

export default function ModernGaltraLogo({ 
  size = 'md', 
  showText = false, 
  className = '',
  variant = 'default'
}: ModernGaltraLogoProps) {
  
  const getStrokeWidth = () => {
    switch (variant) {
      case 'minimal': return '4';
      case 'bold': return '12';
      default: return '8';
    }
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <svg 
          viewBox="0 0 100 100" 
          className={sizeClasses[size]}
          fill="none"
        >
          <defs>
            {/* Gradiente principal */}
            <linearGradient 
              id="galtra-main-gradient" 
              x1="0%" 
              y1="0%" 
              x2="100%" 
              y2="100%"
            >
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#c026d3" />
            </linearGradient>
            
            {/* Gradiente com brilho */}
            <linearGradient 
              id="galtra-glow-gradient" 
              x1="0%" 
              y1="0%" 
              x2="100%" 
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>

            {/* Shadow/Glow effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Círculo principal */}
          <motion.path
            d="M 15 50 A 35 35 0 1 1 50 15"
            stroke="url(#galtra-main-gradient)"
            strokeWidth={getStrokeWidth()}
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Ponto com efeito pulsante */}
          <motion.circle
            cx="75"
            cy="25"
            r={variant === 'minimal' ? '3' : variant === 'bold' ? '6' : '4'}
            fill="url(#galtra-glow-gradient)"
            filter="url(#glow)"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ 
              duration: 1.5, 
              delay: 1.5,
              times: [0, 0.6, 1],
              ease: "easeOut"
            }}
          />
          
          {/* Seta/Triângulo com animação */}
          <motion.path
            d="M 25 40 L 25 60 L 45 50 Z"
            fill="url(#galtra-main-gradient)"
            filter="url(#glow)"
            initial={{ scale: 0, x: -10 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.8,
              type: "spring",
              stiffness: 200
            }}
          />

          {/* Elemento decorativo extra para versão bold */}
          {variant === 'bold' && (
            <motion.circle
              cx="50"
              cy="50"
              r="2"
              fill="url(#galtra-glow-gradient)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0.8] }}
              transition={{ 
                duration: 1, 
                delay: 2.2,
                ease: "easeOut"
              }}
            />
          )}
        </svg>
      </motion.div>

      {showText && (
        <motion.span 
          className={`font-bold gradient-text ${
            size === 'sm' ? 'text-lg' : 
            size === 'md' ? 'text-xl' : 
            size === 'lg' ? 'text-2xl' : 'text-3xl'
          }`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          Galtra
        </motion.span>
      )}
    </div>
  );
}