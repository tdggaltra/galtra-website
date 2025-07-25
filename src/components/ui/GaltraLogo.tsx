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
      {/* Definição do gradiente */}
      <defs>
        <linearGradient 
          id="galtra-gradient" 
          x1="0%" 
          y1="0%" 
          x2="100%" 
          y2="100%"
        >
          <stop offset="0%" stopColor="#2563eb" /> {/* primary-600 */}
          <stop offset="100%" stopColor="#c026d3" /> {/* accent-600 */}
        </linearGradient>
        
        {/* Gradiente para hover */}
        <linearGradient 
          id="galtra-gradient-hover" 
          x1="0%" 
          y1="0%" 
          x2="100%" 
          y2="100%"
        >
          <stop offset="0%" stopColor="#1d4ed8" /> {/* primary-700 */}
          <stop offset="100%" stopColor="#a21caf" /> {/* accent-700 */}
        </linearGradient>
      </defs>
      
      {/* Círculo principal */}
      <motion.path
        d="M 15 50 A 35 35 0 1 1 50 15"
        stroke="url(#galtra-gradient)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="hover:stroke-[url(#galtra-gradient-hover)] transition-all duration-300"
      />
      
      {/* Ponto superior direito */}
      <motion.circle
        cx="75"
        cy="25"
        r="4"
        fill="url(#galtra-gradient)"
        initial={animate ? { scale: 0 } : { scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="hover:fill-[url(#galtra-gradient-hover)] transition-all duration-300"
      />
      
      {/* Forma triangular/seta */}
      <motion.path
        d="M 25 40 L 25 60 L 45 50 Z"
        fill="url(#galtra-gradient)"
        initial={animate ? { scale: 0 } : { scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
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
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        Galtra
      </motion.span>
    </motion.div>
  );
}

// Versão simplificada sem animações para performance
export function GaltraLogoStatic({ 
  size = 'md', 
  showText = false, 
  className = '' 
}: Omit<GaltraLogoProps, 'animate'>) {
  return (
    <GaltraLogo 
      size={size} 
      showText={showText} 
      className={className} 
      animate={false} 
    />
  );
}